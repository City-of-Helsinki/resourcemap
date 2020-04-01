/* eslint-disable no-param-reassign */
/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */
import produce from 'immer';

import spacesInitialState from './spacesInitialState';
import { LOAD_RESOURCE_COMPLETED } from './constants';

// The initial state of the App
export const initialState = {
  username: '',
  spaces: spacesInitialState,
};

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
      new Date(reservation.begin).getTime() < currentTime.getTime() &&
      new Date(reservation.end).getTime() > currentTime.getTime(),
  );

  return currentReservations.length > 0 ? 'taken' : 'available';
}

const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case LOAD_RESOURCE_COMPLETED: {
        const { resource } = action;

        // Get resource index from spaces list.
        const resourceIndex = state.spaces.findIndex(
          space => space.id === resource.id,
        );

        if (resourceIndex !== -1) {
          // const currentTime = new Date('2018-09-17T08:30:00+03:00');
          const currentTime = new Date();

          draft.spaces[resourceIndex].available = isResourceBusy(
            currentTime,
            resource,
          );
          draft.spaces[resourceIndex].name = resource.name.fi;
        }
      }
    }
  });

export default homeReducer;
