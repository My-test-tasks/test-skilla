import { FETCH_CALLS_REQUEST, FETCH_CALLS_FAILURE, FETCH_CALLS_SUCCESS } from './actionTypes';
import {
  FetchCallsRequest,
  FetchCallsSuccess,
  FetchCallsSuccessPayload,
  FetchCallsFailure,
  FetchCallsFailurePayload,
} from './types';

export const fetchCallsRequest = (): FetchCallsRequest => ({
  type: FETCH_CALLS_REQUEST,
});

export const fetchCallsSuccess = (payload: FetchCallsSuccessPayload): FetchCallsSuccess => ({
  type: FETCH_CALLS_SUCCESS,
  payload,
});

export const fetchCallsFailure = (payload: FetchCallsFailurePayload): FetchCallsFailure => ({
  type: FETCH_CALLS_FAILURE,
  payload,
});
