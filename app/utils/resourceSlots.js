import get from 'lodash/get';
import defaultTo from 'lodash/defaultTo';
import chunk from 'lodash/chunk';
import dateFormat from 'dateformat';

import isResourceAvailable from 'utils/isResourceAvailable';
import getResourceOpeningHoursForDay from 'utils/getResourceOpeningHoursForDay';
import { getIsResourceClosedForDay } from 'utils/getIsResourceClosed';

function getInMs(hours = 0, minutes = 0) {
  const hoursInMs = hours * 60 * 60 * 1000;
  const minutesInMs = minutes * 60 * 1000;

  return hoursInMs + minutesInMs;
}

function findTZOffsetString(date) {
  const [, time] = date.split('T');
  const timeZoneOffsetStart = time
    .split('')
    .findIndex(character => character === '+' || character === '-');

  return time.slice(timeZoneOffsetStart);
}

function findTZOffsetTime(tzOffsetString) {
  const [sign, ...rest] = tzOffsetString.split('');
  const tzOffsetTime = rest.join('');
  const isColonFormat = tzOffsetTime.includes(':');
  // We know of two possible formats ±HH:MM or ±HHMM. If the format is
  // not the colon format, we assume it to be the other one.
  const [hours, minutes] = isColonFormat
    ? tzOffsetTime.split(':')
    : chunk(tzOffsetTime, 2).map(arr => arr.join(''));

  return Number(`${sign}1`) * getInMs(hours, minutes);
}

// Slot size is a time duration string hh:mm:ss (00:30:00 = 30min)
function getSlotSizeInTime(slotSize) {
  if (!slotSize) {
    throw Error('slotSize is a required parameter');
  }

  const [hours, minutes] = slotSize.split(':');

  return getInMs(hours, minutes);
}

function getSlots(resource, dateOverride) {
  // If not date is given, use today
  const date = defaultTo(dateOverride, new Date());

  if (!resource) {
    throw Error('The parameter resource is required');
  }

  // If the resource is closed for the date, we return an empty array.
  // Note that an empty array return value from this utility does not
  // necessarily mean that the resource is closed. If you want to know
  // whether the resource is closed, please use the utility for that
  // directly.
  if (getIsResourceClosedForDay(resource, date)) {
    return [];
  }

  const slotSize = get(resource, 'slot_size', null);
  const openingHours = get(resource, 'opening_hours', null);

  if (slotSize === null || openingHours === null) {
    throw Error(
      'The resource parameter should have the field "slot_size" and "opening_hours"',
    );
  }

  const openingHoursForDay = getResourceOpeningHoursForDay(openingHours, date);

  if (openingHoursForDay === undefined) {
    throw Error(
      `The resource didn't provide opening hours for the date ${dateFormat(
        date,
        'yyyy-mm-dd',
      )}`,
    );
  }

  const opens = get(openingHoursForDay, 'opens', null);
  const closes = get(openingHoursForDay, 'closes', null);

  if (opens === null || closes === null) {
    throw Error(`The openingHours should contain opens and closes fields`);
  }

  const slotSizeInTime = getSlotSizeInTime(slotSize);
  const openingTime = new Date(opens).getTime();
  const slotCount = Number(
    ((new Date(closes).getTime() - openingTime) / slotSizeInTime).toFixed(0),
  );
  const slots = Array.from({ length: slotCount }, (_, index) => {
    const originalOffsetString = findTZOffsetString(opens);
    const originalOffsetTime = findTZOffsetTime(originalOffsetString);
    const startTime = openingTime + originalOffsetTime + index * slotSizeInTime;
    // Leave one ms short from the next begin time in order to avoid
    // overlap between slots.
    const endTime = startTime + (slotSizeInTime - 1);
    const dateTimeFormat = "yyyy-mm-dd'T'HH:MM:ss";

    return {
      start:
        dateFormat(new Date(startTime), dateTimeFormat) + originalOffsetString,
      end: dateFormat(new Date(endTime), dateTimeFormat) + originalOffsetString,
    };
  });

  return slots;
}

function getCurrentSlot(slots) {
  const currentTime = new Date().getTime();
  const currentSlot = slots.find(
    slot =>
      currentTime >= new Date(slot.start).getTime() &&
      currentTime <= new Date(slot.end).getTime(),
  );

  return defaultTo(currentSlot, null);
}

function getNextFreeSlot(slots, resource) {
  const isPast = slot => {
    const currentTime = new Date().getTime();

    return new Date(slot.start).getTime() < currentTime;
  };
  const isReserved = slot => {
    const timeInSlot = new Date(new Date(slot.start).getTime() + 1);

    return !isResourceAvailable(timeInSlot, resource);
  };

  const upComingFreeSlots = slots
    .filter(slot => !isPast(slot))
    .filter(slot => !isReserved(slot));

  if (upComingFreeSlots && upComingFreeSlots.length >= 1) {
    return upComingFreeSlots[0];
  }

  return null;
}

// This utility finds out the slot that's allows the user to reserve the
// space as soon as possible. If the space is reserved, this slot is the
// next free slot. If it's not reserved, the slot is the current slot.
// If no next slot was found, the utility returns null.
function getClosestAvailableSlot(resource) {
  if (!resource) {
    return null;
  }

  const date = new Date();
  const isClosed = getIsResourceClosedForDay(resource, date);

  // If the resource is closed there can be no next slot today, because
  // there are no slots altogether.
  if (isClosed) {
    return null;
  }

  const slots = getSlots(resource);
  const isAvailable = isResourceAvailable(date, resource);

  if (isAvailable) {
    return getCurrentSlot(slots);
  }

  return getNextFreeSlot(slots, resource);
}

function getNextTakenSlot(slots, resource) {
  const isPast = slot => {
    const currentTime = new Date().getTime();

    return new Date(slot.start).getTime() < currentTime;
  };
  const isReserved = slot => {
    const timeInSlot = new Date(new Date(slot.start).getTime() + 1);

    return !isResourceAvailable(timeInSlot, resource);
  };

  const upComingTakenSlots = slots
    .filter(slot => !isPast(slot))
    .filter(slot => isReserved(slot));

  if (upComingTakenSlots && upComingTakenSlots.length >= 1) {
    return upComingTakenSlots[0];
  }

  return null;
}

function getNextReservedSlot(resource) {
  if (!resource) {
    return null;
  }

  const slots = getSlots(resource);

  if (slots.length === 0) {
    return null;
  }

  const nextReservedSlot = getNextTakenSlot(slots, resource);

  if (!nextReservedSlot) {
    return slots[slots.length - 1];
  }

  return nextReservedSlot;
}

export {
  getClosestAvailableSlot,
  getNextReservedSlot,
  findTZOffsetString,
  findTZOffsetTime,
  getSlotSizeInTime,
  getSlots,
};
