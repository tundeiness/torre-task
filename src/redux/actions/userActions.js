const BASE_URL = process.env.REACT_APP_BASE_URL;

export const REGISTER = (payload) => async (dispatch) => {
  try {
    let serverCall = await fetch(`${BASE_URL}/users`, {
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

export const VERIFY_USER = (token) => async (dispatch) => {
  try {
    let serverCall = await fetch(
      `${BASE_URL}/auth/verify-user?token=${token}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    const response = await serverCall.json();
    if (response.success) {
      dispatch({
        type: 'SET_JWT_TOKEN',
        token: response?.data?.token,
      });
    }
    return response;
  } catch (error) {
    console.log(error);
  }
};
