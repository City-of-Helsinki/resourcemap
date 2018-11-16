import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_RESOURCE } from './constants.js';
import { loadResourceCompleted, loadResourceError } from './actions.js';
import { makeSelectSpaces } from './selectors.js';

import request from 'utils/request';

export function* loadResource() {
  // Get spaces.
  const spaces = yield select(makeSelectSpaces());

  // Load status of each space.
  for (let i = 0; i < spaces.size; i++) {
    const space = spaces.get(i);
    const id = space.get('id');

    if (id) {
      const requestURL = `http://api.hel.fi/respa-test/v1/resource/${id}/`;

      try {
        const resource = yield call(request, requestURL);
        yield put(loadResourceCompleted(resource));
      } catch (err) {
        yield put(loadResourceError(err));
      }
    }
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* homeSaga() {
  yield loadResource(LOAD_RESOURCE, loadResource);
}
