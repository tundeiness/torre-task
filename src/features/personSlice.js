/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPerson = createAsyncThunk('person/loadPerson', async (term, { rejectWithValue }) => {
  const res = await axios.get(
    `http://localhost:3001/api/v1/persons/${term}`,
  ).catch((err) => {
    console.log('Err :', err);
    return rejectWithValue(' An Error occurred');
  });

  return res?.data;
});

export const personSlice = createSlice({
  name: 'person',
  initialState: {
    personInfo: {},
    pending: false,
    error: false,
    status: null,
  },
  reducers: {
    getPersonPending: (state) => {
      state.pending = true;
      state.status = 'pending';
    },
    getPersonSuccess: (state, action) => {
      state.pending = false;
      state.status = 'success';
      state.personInfo = action.payload;
    },
    getPersonError: (state) => {
      state.error = state;
      state.status = 'rejected';
    },
  },
  extraReducers: {
    [fetchPerson.pending]: (state) => {
      state.pending = true;
      state.error = false;
      state.status = 'pending';
    },
    [fetchPerson.fulfilled]: (state, action) => {
      state.pending = false;
      state.status = 'success';
      state.personInfo = action.payload;
    },
    [fetchPerson.rejected]: (state) => {
      state.pending = null;
      state.error = true;
      state.status = 'rejected';
    },
  },
});

export const loadPerson = (state) => state.person.personInfo;
// export const { getPersonPending, getPersonSuccess, getPersonError } = personSlice.actions;
export default personSlice.reducer;
