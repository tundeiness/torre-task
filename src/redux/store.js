// import { configureStore } from '@reduxjs/toolkit';
// import userReducer from '../features/users/usersSlice';

// const store = configureStore({
//   reducer: {
//     user: userReducer,
//   },
// });

// export default store;
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './reducers/index';

const middlewares = [thunk];
const middleware = applyMiddleware(...middlewares);

export default createStore(reducer, composeWithDevTools(middleware));
