import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../data";

const initialState = {
  cartItems: data,
  amount: 0,
  total: 0,
  isLoading: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increaseItem: (state, actions) => {
      console.log(actions);
      const product = state.cartItems.find(
        (item) => item.id === actions.payload.id
      );
      product.amount += 1;
      console.log(initialState);
    },
    decreaseItem: (state, { payload }) => {
      const product = state.cartItems.find((item) => item.id === payload.id);
      product.amount -= 1;
    },
    addItem: (state, { payload }) => {
      //
    },
    removeItem: (state, { payload }) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== payload.id
      );
    },
    calculateTotal: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export default cartSlice.reducer;
export const {
  increaseItem,
  decreaseItem,
  clearCart,
  removeItem,
  calculateTotal,
} = cartSlice.actions;
