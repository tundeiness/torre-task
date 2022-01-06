import { combineReducers } from 'redux';

// Reducers
import userReducer from './userReducer';
import authReducer from './authReducer';

export default combineReducers({
  userReducer,
  authReducer,
});
