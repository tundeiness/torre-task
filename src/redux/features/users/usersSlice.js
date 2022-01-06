/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import {
  createSlice,
  createAsyncThunk,
} from '@reduxjs/toolkit';

import userApi from '../../../common/apis/userApi';

export const fetchAsyncUsers = createAsyncThunk(
  'users/fetchAsyncUsers',

  async (username) => {
    // const username = 'Oretade';
    const response = await userApi.get(`https://torre.bio/api/bios/${username}`);
    return response.data;
  },
);

const initialState = {
  users: {},
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    removeSelectedUser: (state) => {
      state.selectUser = {};
    },
  },
  extraReducers: {
    [fetchAsyncUsers.pending]: () => {
      console.log('Pending');
    },
    [fetchAsyncUsers.fulfilled]: (state, { payload }) => {
      console.log('Fetched Successfully!');
      return { ...state, users: payload };
    },
    [fetchAsyncUsers.rejected]: () => {
      console.log('Rejected!');
    },
  },
});

export const getAllUsers = (state) => state.users.users;

export default userSlice;
