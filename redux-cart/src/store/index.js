import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cart-slice';
import uiSlice from './ui-slice';

console.dir(uiSlice);

// store 제공
const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
