/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPerson = createAsyncThunk('person/loadPerson', async (term) => {
  const res = await axios.get(
    `http://localhost:3001/api/v1/persons/${term}`,
  ).catch((err) => {
    console.log('Err :', err);
  });

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
      state.pending = true;
    },
    // getPersonSuccess: (state, action) => {
    //   const { personInfo = action.payload, pending = false } = state;
    //   return {
    //     ...state,
    //     personInfo,
    //     pending,
    //   };
    // },
    getPersonSuccess: (state, action) => {
      state.pending = false;
      state.personInfo = action.payload;
    },
    getPersonError: (state) => {
      state.error = state;
    },
  },
  extraReducers: {
    [fetchPerson.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [fetchPerson.fulfilled]: (state, action) => {
      state.pending = false;
      state.personInfo = action.payload;
    },
    [fetchPerson.rejected]: (state) => {
      state.pending = null;
      state.error = true;
    },
  },
});

export const loadPerson = (state) => state.person.personInfo;
// export const { getPersonPending, getPersonSuccess, getPersonError } = personSlice.actions;
export default personSlice.reducer;
