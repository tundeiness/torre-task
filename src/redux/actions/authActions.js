import { USER_JWT_TOKEN } from './../../config/constants';
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const CHANGE_PASSWORD = (payload) => async () => {
  try {
    let serverCall = await fetch(`${BASE_URL}/auth/change-password`, {
      method: 'PUT',
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

export const SIGN_IN = (payload) => async (dispatch) => {
  try {
    let serverCall = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const response = await serverCall.json();
    if (response.success) {
      dispatch({
        type: 'SET_CURRENT_USER',
        payload: response?.data,
      });
    }
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const FORGOT_PASSWORD = (payload) => async (dispatch) => {
  try {
    let serverCall = await fetch(`${BASE_URL}/auth/forgot-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const response = await serverCall.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const RESET_PASSWORD = (payload) => async (dispatch) => {
  try {
    let serverCall = await fetch(`${BASE_URL}/auth/reset-password`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const response = await serverCall.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};
