import { all, fork } from 'redux-saga/effects';

import callsSaga from './calls/sagas';

export function* rootSaga() {
  yield all([fork(callsSaga)]);
}
