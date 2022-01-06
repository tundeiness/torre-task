import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './users';

const rootReducer = combineReducers({
  users: userReducer,
});

export default rootReducer;
