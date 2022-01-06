// import { createStore, applyMiddleware } from 'redux';
// import thunkMiddleware from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from '../redux/reducers';

// const store = createStore(
//   rootReducer, composedEnhancer,
// );

// const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

// const store = configureStore({
//   reducer: {
//     user: userReducer,
//   },
// });

// export default store;

// import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
// import { useDispatch } from 'react-redux';
// import userReducer from '';
// import rootReducer, { RootState } from '../slices';

// const store = configureStore({ reducer: rootReducer });

// export default store;

import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice'
// import todosReducer from '../features/todos/todosSlice'
// import postsReducer from '../features/posts/postsSlice'
import usersReducer from './features/users/usersSlice';

export default configureStore({
  reducer: {
    // counter: counterReducer,
    // todos: todosReducer,
    // posts: postsReducer,
    users: usersReducer,
  },
});
