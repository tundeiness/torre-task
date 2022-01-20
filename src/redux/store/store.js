import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/users/usersSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
