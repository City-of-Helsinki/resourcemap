import isResourceAvailable from 'utils/isResourceAvailable';
import SpaceAvailability from 'constants/SpaceAvailability';

function getSpaceAvailability(space) {
  if (!space.canBeReserved) {
    return SpaceAvailability.CLOSED;
  }

  if (!space.data) {
    return SpaceAvailability.NO_DATA;
  }

  const isAvailable = isResourceAvailable(new Date(), space.data);

  if (isAvailable) {
    return SpaceAvailability.AVAILABLE;
  }

  return SpaceAvailability.TAKEN;
}

export default getSpaceAvailability;
