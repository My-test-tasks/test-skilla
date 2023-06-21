import { all, fork } from 'redux-saga/effects';

import callsSaga from './calls/sagas';
import recordSaga from './record/sagas';

export function* rootSaga() {
  yield all([fork(callsSaga), fork(recordSaga)]);
}
