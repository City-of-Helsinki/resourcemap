/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import spacesInitialState from './spacesInitialState';
import { LOAD_RESOURCE_COMPLETED } from './constants';

// The initial state of the App
export const initialState = fromJS({
  username: '',
  spaces: spacesInitialState,
});

/**
 * Go through resource reservations and check if they are:
 * - Free                 => return available
 * - Occupied             => return taken
 * - Free in 15 minutes   => return soon
 */
function isResourceBusy(currentTime, resource) {
  const reservations = resource.reservations || false;

  // No reservations => free
  if (!reservations || !Array.isArray(reservations)) {
    return 'available';
  }

  // Overlapping reservations => occupied
  const currentReservations = reservations.filter(
    reservation =>
      new Date(reservation.get('begin')).getTime() < currentTime.getTime() &&
      new Date(reservation.get('end')).getTime() > currentTime.getTime(),
  );

  return currentReservations ? 'taken' : 'available';
}

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_RESOURCE_COMPLETED:
      const { resource } = action;

      // Get resource index from spaces list.
      const resourceIndex = state
        .get('spaces')
        .findIndex(space => space.get('id') == resource.id);

      if (resourceIndex !== -1) {
        return state
          .setIn(
            ['spaces', resourceIndex, 'available'],
            isResourceBusy(new Date(), resource),
          )
          .setIn(['spaces', resourceIndex, 'name'], resource.name.fi);
      } else {
        return state;
      }
    default:
      return state;
  }
}

export default homeReducer;
