import { FETCH_RECORD_REQUEST, FETCH_RECORD_SUCCESS, FETCH_RECORD_FAILURE } from './actionTypes';

export type RecordResponse = Blob | null;

export interface RecordState {
  pending: boolean;
  blob: RecordResponse;
  error: string | null;
}

export interface FetchRecordRequestPayload {
  recordId: string;
}

export interface FetchRecordSuccessPayload {
  blob: RecordResponse;
}

export interface FetchRecordFailurePayload {
  error: string;
}

export interface FetchRecordRequest {
  type: typeof FETCH_RECORD_REQUEST;
  payload: FetchRecordRequestPayload;
}

export type FetchRecordSuccess = {
  type: typeof FETCH_RECORD_SUCCESS;
  payload: FetchRecordSuccessPayload;
};

export type FetchRecordFailure = {
  type: typeof FETCH_RECORD_FAILURE;
  payload: FetchRecordFailurePayload;
};

export type RecordActions = FetchRecordRequest | FetchRecordSuccess | FetchRecordFailure;
