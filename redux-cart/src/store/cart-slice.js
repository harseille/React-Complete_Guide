import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [], totalQuantity: 0, totalAmount: 0 },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity = existingItem.quantity + 1;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
      state.totalQuantity = state.totalQuantity + 1;
      state.totalAmount = state.totalPrice + newItem.price;
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else if (existingItem.quantity > 1) {
        existingItem.quantity = existingItem.quantity - 1;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
      state.totalQuantity = state.totalQuantity - 1;
      state.totalAmount = state.totalPrice - existingItem.price;
    },
  },
});

export const cartAction = cartSlice.actions;

export default cartSlice;
