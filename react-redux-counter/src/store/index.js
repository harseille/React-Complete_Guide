// import { createStore } from 'redux';
// import { createReducer } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit'; // createReducer 보다 강력

import authReducer from './auth';
import counterReducer from './counter';

// const counterReducer = (state = initialState, action) => {
//   if (action.type === 'increment') {
//     return {
//       ...state,
//       counter: state.counter + 1,
//     };
//   }
//   if (action.type === 'increase') {
//     return {
//       ...state,
//       counter: state.counter + action.amount,
//     };
//   }
//   if (action.type === 'decrement') {
//     return {
//       ...state,
//       counter: state.counter - 1,
//     };
//   }
//   if (action.type === 'toggle') {
//     return {
//       ...state,
//       showCounter: !state.showCounter,
//     };
//   }

//   return state;
// };

// const store = createStore(counterSlice.reducer);

// * 여러개의 reducer를 쉽게 합칠 수 있다
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer }, // 이렇게도 사용할 수 있다
  // reducer: counterSlice.reducer,
});

export default store;
