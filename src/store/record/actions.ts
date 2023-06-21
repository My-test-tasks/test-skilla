import { FETCH_RECORD_REQUEST, FETCH_RECORD_FAILURE, FETCH_RECORD_SUCCESS } from './actionTypes';
import {
  FetchRecordRequest,
  FetchRecordSuccess,
  FetchRecordSuccessPayload,
  FetchRecordFailure,
  FetchRecordFailurePayload,
  FetchRecordRequestPayload,
} from './types';

export const fetchRecordRequest = (payload: FetchRecordRequestPayload): FetchRecordRequest => ({
  type: FETCH_RECORD_REQUEST,
  payload,
});

export const fetchRecordSuccess = (payload: FetchRecordSuccessPayload): FetchRecordSuccess => ({
  type: FETCH_RECORD_SUCCESS,
  payload,
});

export const fetchRecordFailure = (payload: FetchRecordFailurePayload): FetchRecordFailure => ({
  type: FETCH_RECORD_FAILURE,
  payload,
});
