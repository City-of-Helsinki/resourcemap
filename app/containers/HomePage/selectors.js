/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import get from 'lodash/get';
import { produce } from 'immer';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectUsername = () =>
  createSelector(
    selectHome,
    homeState => homeState.username,
  );

const makeSelectSpaces = () =>
  createSelector(
    selectHome,
    homeState => {
      const resources = get(homeState, 'resources', []);
      const spaces = get(homeState, 'spaces', []);

      return produce(spaces, draft => {
        spaces.forEach((space, i) => {
          // eslint-disable-next-line no-param-reassign
          draft[i].data = get(resources, space.respaId, null);
        });
      });
    },
  );

export { selectHome, makeSelectUsername, makeSelectSpaces };
