import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:3001/api/v1/persons/',
  headers: {
    'Content-type': 'application/json',
  },
});
