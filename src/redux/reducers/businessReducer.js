const initialState = {
  business: {},
};

const businessReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_BUSINESS':
      return {
        ...state,
        business: action?.payload,
      };

    default:
      return state;
  }
};

export default businessReducer;
