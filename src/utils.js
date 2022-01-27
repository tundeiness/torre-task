/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';

// export async const fetchPerson =()=> {
//   const res = await axios.get(
//   `http://localhost:3001/api/v1/persons/alexanmder`),
//   if (!res.ok) {
//     throw new Error("API failed");
//   }

//   const data = await res.json();
//   return data;
// }

export const fetchPersons = async (username) => axios.get(
  'http://localhost:3001/api/v1/persons/alexander',
);
