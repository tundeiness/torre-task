/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPerson = createAsyncThunk('person/loadPerson', async (username) => {
  const res = await axios.get(
    'http://localhost:3001/api/v1/persons/alexander',
  );

  return res.data;
});

export const personSlice = createSlice({
  name: 'person',
  initialState: {
    personInfo: {},
    pending: false,
    error: false,
  },
  reducers: {
    getPersonPending: (state) => {
      // state.pending = true;
      const { pending = true } = state;
      return { pending };
    },
    getPersonSuccess: (state, action) => {
      const { personInfo = action.payload, pending = false } = state;
      // const { data } = action.payload;
      return {
        ...state,
        personInfo,
        pending,
      };
    },
    getPersonError: (state) => {
      const { pending = true, error = true } = state;
      return { pending, error };
    },
  },
  extraReducers: {
    [fetchPerson.pending]: (state) => {
      // const { pending = true, error = false } = state;
      // return { pending, error };
      state.pending = true;
      state.error = false;
    },
    [fetchPerson.fulfilled]: (state, action) => {
      // const { data } = action.payload;
      // const { pending = false } = state;
      // return { pending, data };

      state.pending = false;
      state.personInfo = action.payload;
    },
    [fetchPerson.rejected]: (state) => {
      // const { pending = null, error = true } = state;
      // return { pending, error };
      state.pending = null;
      state.error = true;
    },
  },
});

export const selectPerson = (state) => state.person.person;
export const { getPersonPending, getPersonSuccess, getPersonError } = personSlice.actions;
export default personSlice.reducer;
