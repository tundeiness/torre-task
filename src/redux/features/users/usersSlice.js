/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// eslint-disable-next-line import/prefer-default-export
// export const getUsers = createAsyncThunk(
//   'users/getUsers',
//   async (dispatch, getState, searchtext) => fetch('https://jsonplaceholder.typicode.com/users').then(
//     (res) => res.json(),
//   ),
// );

export const getUsers = createAsyncThunk(
  'users/getUsers',

  async (username) => {
    const response = await fetch(`http://localhost:3001/api/v1/persons/${username}`, {
      mode: 'no-cors',
    });
    const person = await response.json();
    console.log(response);
    return person;
  },
);

// export const getUsers = createAsyncThunk(
// 'users/getUsers',
// async (dispatch, getState, searchtext) => fetch(`https://torre.bio/api/bios/${searchtext}`, { mode: 'no-cors' }).then((res) => res.json()),

// async (searchText) => {
//   const response = await fetch(`https://torre.bio/api/bios/${searchText}`);
// axios
//   .get('https://torre.bio/api/bios/john')
//   .then((data) => {
//     console.log(data.data);
//     return data.data;
//   })
//   .catch((e) => {
//     console.log('space upload error', e);
//     return e;
//   });

// const res = await axios.get('https://torre.bio/api/bios/john');
// const { data } = await res;
// return data;

// await axios
//   .get('https://torre.bio/api/bios/john', {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//   .then((data) => {
//     console.log('======success=======');
//     console.log(data);
//     return data.data;
//   })
//   .catch((err) => {
//     console.log('======error=======');
//     console.log(err);
//     return err;
//   });
// },
// );

export const getOpportunities = createAsyncThunk(
  'opportunities/getOpportunities',

  async (id) => {
    const response = await fetch(
      // `https://torre.co/api/suite/opportunities/${id}`,
      {
        mode: 'no-cors',
      },
    );
    const opportunities = await response.json();
    return opportunities;
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: {},
    status: null,
  },

  extraReducers: {
    [getUsers.pending]: (state, action) => {
      console.log('======loading=======');
      return { ...state, status: 'loading' };
    },
    [getUsers.success]: (state, action) => {
      console.log('======success=======');
      return { ...state, status: 'success', state: action.payload };
    },
    [getUsers.rejected]: (state, action) => {
      console.log('======error=======');
      return { ...state, status: 'failed' };
    },
    [getOpportunities.success]: (state, action) => {
      console.log('success');
      return { ...state, status: 'success', state: action.payload };
    },
  },
});

// const opportunitySlice = createSlice({
//   name: "user",
//   initialState: {
//     users: {},
//     status: null,
//   },

//   extraReducers: {
//     [getUsers.pending]: (state, action) => {
//       console.log("loading");
//       return { ...state, status: "loading" };
//     },
//     [getUsers.success]: (state, action) => {
//       console.log("success");
//       return { ...state, status: "success", state: action.payload };
//     },
//     [getUsers.rejected]: (state, action) => {
//       console.log("failed");
//       return { ...state, status: "failed" };
//     },
//   },
// });

export default userSlice.reducer;
