import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../reducer/CartReducer";
import cartModalReducer from "../reducer/CartModalReducer";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    cartModal: cartModalReducer,
  },
});
