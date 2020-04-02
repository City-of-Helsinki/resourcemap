import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import dateFormat from 'dateformat';
import request from 'utils/request';
import { LOAD_RESOURCE } from './constants';
import { loadResourceCompleted, loadResourceError } from './actions';
import { makeSelectSpaces } from './selectors';

export function* loadResource() {
  // Get spaces.
  const spaces = yield select(makeSelectSpaces());

  const start = new Date();
  const startTimeStr = encodeURIComponent(
    `${dateFormat(start, 'yyyy-mm-dd')}T00:00:00Z`,
  );
  const endTimeStr = encodeURIComponent(
    `${dateFormat(start, 'yyyy-mm-dd')}T23:59:59Z`,
  );

  // Load status of each space.
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < spaces.length; i++) {
    const space = spaces[i];
    const { id, useRespa } = space;

    if (id && useRespa) {
      const requestURL = `https://api.hel.fi/respa/v1/resource/${id}/?start=${startTimeStr}&end=${endTimeStr}`;
      // const requestURL = `http://94.237.32.197:3000/api/resource.json`;

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
  try {
    yield all([takeLatest(LOAD_RESOURCE, loadResource)]);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
}
