import { FETCH_CALLS_REQUEST, FETCH_CALLS_SUCCESS, FETCH_CALLS_FAILURE } from './actionTypes';

import { CallsActions, CallsState } from './types';

const initialState: CallsState = {
  pending: false,
  calls: [],
  error: null,
};

const callsReducer = (state = initialState, action: CallsActions) => {
  switch (action.type) {
    case FETCH_CALLS_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_CALLS_SUCCESS:
      return {
        ...state,
        pending: false,
        calls: action.payload.calls,
        error: null,
      };
    case FETCH_CALLS_FAILURE:
      return {
        ...state,
        pending: false,
        calls: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default callsReducer;
