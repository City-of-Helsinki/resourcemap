import get from 'lodash/get';
import defaultTo from 'lodash/defaultTo';

import getResourceOpeningHoursForDay from 'utils/getResourceOpeningHoursForDay';

function getOpensAndCloses(resource, date) {
  const openingHours = get(resource, 'opening_hours', []);
  const openingHoursForDate = getResourceOpeningHoursForDay(openingHours, date);

  const opens = get(openingHoursForDate, 'opens');
  const closes = get(openingHoursForDate, 'closes');

  return [opens, closes];
}

export function getIsResourceClosedForDay(resource, date) {
  const [opens, closes] = getOpensAndCloses(resource, date);

  return opens === null && closes === null;
}

function getIsResourceClosedNow(opens, closes, date) {
  const opensTime = new Date(opens).getTime();
  const closesTime = new Date(closes).getTime();
  const nowTime = date.getTime();

  const isBeforeOpening = nowTime < opensTime;
  const isAfterClosing = nowTime > closesTime;

  return isBeforeOpening || isAfterClosing;
}

function getResourceIsClosed(resource, dateOverride) {
  const date = defaultTo(dateOverride, new Date());

  if (getIsResourceClosedForDay(resource, date)) {
    return true;
  }

  const [opens, closes] = getOpensAndCloses(resource, date);

  if (opens && closes) {
    return getIsResourceClosedNow(opens, closes, date);
  }

  return false;
}

export default getResourceIsClosed;
