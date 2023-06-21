import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { fetchRecordFailure, fetchRecordSuccess } from './actions';
import { FETCH_RECORD_REQUEST } from './actionTypes';
import { FetchRecordRequest, RecordResponse } from './types';
import { API_TOKEN, API_URL } from '@configs/api';

const config: AxiosRequestConfig = {
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
    ['Content-type']: 'audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3',
    ['Content-Transfer-Encoding']: 'binary',
    ['Content-Disposition']: 'filename="record.mp3"',
  },
  responseType: 'blob',
};

const getRecord = (recordId: string) =>
  axios.post<RecordResponse>(`${API_URL}/getRecord?record=${recordId}`, {}, config);

function* fetchRecordSaga({ payload }: FetchRecordRequest) {
  const { recordId } = payload;

  try {
    const response: AxiosResponse<RecordResponse> = yield call(getRecord, recordId);
    const data = response.data;
    yield put(
      fetchRecordSuccess({
        blob: data ? new Blob([data], { type: 'audio/mpeg' }) : null,
      })
    );
  } catch (e) {
    yield put(
      fetchRecordFailure({
        error: e.response.data.error_msg,
      })
    );
  }
}

function* recordSaga() {
  yield all([takeLatest(FETCH_RECORD_REQUEST, fetchRecordSaga)]);
}

export default recordSaga;
