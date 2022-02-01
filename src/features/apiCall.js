/* eslint-disable import/prefer-default-export */
// import axios from 'axios';
// import { getPersonPending, getPersonSuccess, getPersonError } from './personSlice';

// export const getPersonRecord = async (username, dispatch) => {
//   dispatch(getPersonPending());
//   try {
//     const res = await axios.get(
//       'http://localhost:3001/api/v1/persons/alexander',
//     );
//     dispatch(getPersonSuccess(res.data));
//   } catch (err) {
//     dispatch(getPersonError());
//   }
// };

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { fetchPerson } from './personSlice';

export const apiCall = createApi({
  reducerPath: 'fetchPerson',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
  endpoints: (builder) => ({
    getPerson: builder.query({
      query: (username) => `/api/v1/persons/${username}`,
    }),
  }),
});

export const { useFetchPersonQuery } = fetchPerson;
