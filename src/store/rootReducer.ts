import { combineReducers } from 'redux';

import callsReducer from './calls/reducer';
import recordReducer from './record/reducer';

const rootReducer = combineReducers({
  calls: callsReducer,
  record: recordReducer,
});

export default rootReducer;
