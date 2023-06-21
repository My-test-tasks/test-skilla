import { FETCH_RECORD_REQUEST, FETCH_RECORD_SUCCESS, FETCH_RECORD_FAILURE } from './actionTypes';

import { RecordActions, RecordState } from './types';

const initialState: RecordState = {
  pending: false,
  blob: null,
  error: null,
};

const recordReducer = (state = initialState, action: RecordActions) => {
  switch (action.type) {
    case FETCH_RECORD_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_RECORD_SUCCESS:
      return {
        ...state,
        pending: false,
        blob: action.payload.blob,
        error: null,
      };
    case FETCH_RECORD_FAILURE:
      return {
        ...state,
        pending: false,
        blob: null,
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default recordReducer;
