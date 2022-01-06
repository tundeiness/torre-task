import { USER_JWT_TOKEN } from './../../config/constants';
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const REGISTER_BUSINESS = (payload) => async (dispatch) => {
  try {
    let serverCall = await fetch(`${BASE_URL}/business`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: USER_JWT_TOKEN,
      },
      body: JSON.stringify(payload),
    });

    const response = await serverCall.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};
