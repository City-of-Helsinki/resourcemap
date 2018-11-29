import { call, put, select, takeLatest } from 'redux-saga/effects';
import dateFormat from 'dateformat';
import { LOAD_RESOURCE } from './constants.js';
import { loadResourceCompleted, loadResourceError } from './actions.js';
import { makeSelectSpaces } from './selectors.js';

import request from 'utils/request';

export function* loadResource() {
  // Get spaces.
  const spaces = yield select(makeSelectSpaces());

  let start = new Date();
  let startTimeStr = encodeURIComponent(
    `${dateFormat(start, 'yyyy-mm-dd')}T00:00:00Z`,
  );
  let endTimeStr = encodeURIComponent(
    `${dateFormat(start, 'yyyy-mm-dd')}T23:59:59Z`,
  );

  // Load status of each space.
  for (let i = 0; i < spaces.size; i++) {
    const space = spaces.get(i);
    const id = space.get('id');

    if (id) {
      const requestURL = `http://api.hel.fi/respa-test/v1/resource/${id}/?start=${startTimeStr}&end=${endTimeStr}`;
      //const requestURL = `http://94.237.32.197:3000/api/resource.json`;

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
