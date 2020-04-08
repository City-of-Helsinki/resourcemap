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

// import isResourceAvailable from 'utils/isResourceAvailable';
import spacesInitialState from './spacesInitialState';
import { LOAD_RESOURCE_COMPLETED } from './constants';

// The initial state of the App
export const initialState = {
  spaces: spacesInitialState,
  resources: {},
};

/**
 * Go through resource reservations and check if they are:
 * - Free                 => return available
 * - Occupied             => return taken
 * - Free in 15 minutes   => return soon
 */
// function isResourceBusy(currentTime, resource) {
//   return isResourceAvailable(currentTime, resource) ? 'available' : 'taken';
// }

const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case LOAD_RESOURCE_COMPLETED: {
        const { resource } = action;

        draft.resources[resource.id] = resource;
      }
    }
  });

export default homeReducer;
