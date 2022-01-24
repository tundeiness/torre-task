/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export const fetchPersons = async (username) => axios.get(
  `http://localhost:3001/api/v1/persons/${username}`,
);
