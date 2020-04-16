import isResourceAvailable from 'utils/isResourceAvailable';
import getIsResourceClosed from 'utils/getIsResourceClosed';
import SpaceAvailability from 'constants/SpaceAvailability';

function getSpaceAvailability(space) {
  if (!space.data) {
    return SpaceAvailability.NO_DATA;
  }

  if (!space.canBeReserved || getIsResourceClosed(space.data)) {
    return SpaceAvailability.CLOSED;
  }

  const isAvailable = isResourceAvailable(new Date(), space.data);

  if (isAvailable) {
    return SpaceAvailability.AVAILABLE;
  }

  return SpaceAvailability.TAKEN;
}

export default getSpaceAvailability;
