const initialState = {
  token: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_JWT_TOKEN':
      return {
        ...state,
        token: action?.token,
      };

    default:
      return state;
  }
};

export default authReducer;
