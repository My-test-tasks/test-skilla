import axios, { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { fetchCallsFailure, fetchCallsSuccess } from './actions';
import { FETCH_CALLS_REQUEST } from './actionTypes';
import { CallsResponse } from './types';
import { API_TOKEN, API_URL } from '@configs/api';

const config = {
  headers: { Authorization: `Bearer ${API_TOKEN}` },
};

const getCalls = () => axios.post<CallsResponse>(`${API_URL}?limit=200`, {}, config);

function* fetchCallsSaga() {
  try {
    const response: AxiosResponse<CallsResponse> = yield call(getCalls);
    yield put(
      fetchCallsSuccess({
        calls: response.data.results,
      })
    );
  } catch (e) {
    yield put(
      fetchCallsFailure({
        error: e.response.data.error_msg,
      })
    );
  }
}

function* callsSaga() {
  yield all([takeLatest(FETCH_CALLS_REQUEST, fetchCallsSaga)]);
}

export default callsSaga;
