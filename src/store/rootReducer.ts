import { combineReducers } from 'redux';

import callsReducer from './calls/reducer';

const rootReducer = combineReducers({
  calls: callsReducer,
});

export default rootReducer;
