/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.get('home', initialState);

const makeSelectUsername = () =>
  createSelector(selectHome, homeState => homeState.get('username'));

const makeSelectSpaces = () =>
  createSelector(selectHome, homeState => homeState.get('spaces'));

export { selectHome, makeSelectUsername, makeSelectSpaces };
