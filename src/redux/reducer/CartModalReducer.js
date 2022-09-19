import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isActiv: false,
};

const CartModalReducer = createSlice({
  name: "cartModal",
  initialState,
  reducers: {
    openModal: (state, actions) => {
      state.isActiv = true;
    },
    closeModal: (state, actions) => {
      state.isActiv = false;
    },
  },
});

export default CartModalReducer.reducer;
export const { openModal, closeModal } = CartModalReducer.actions;
