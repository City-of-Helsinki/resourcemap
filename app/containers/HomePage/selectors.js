/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
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
    homeState => homeState.spaces,
  );

export { selectHome, makeSelectUsername, makeSelectSpaces };
