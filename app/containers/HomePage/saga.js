import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import dateFormat from 'dateformat';
import request from 'utils/request';
import { LOAD_RESOURCE } from './constants';
import { loadResourceCompleted, loadResourceError } from './actions';
import { makeSelectSpaces } from './selectors';

function* makeFetch(requestURL) {
  try {
    const resource = yield call(request, requestURL);
    yield put(loadResourceCompleted(resource));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    yield put(loadResourceError(err));
  }
}

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
  const spaceIds = spaces.map(space => space.respaId).filter(id => id);

  const loadedUrls = spaceIds.map(
    loadedId =>
      `https://api.hel.fi/respa/v1/resource/${loadedId}/?start=${startTimeStr}&end=${endTimeStr}`,
  );

  yield all(loadedUrls.map(url => call(makeFetch, url)));
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
