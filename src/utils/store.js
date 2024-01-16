import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import searchSlice from "./searchSlice";
import loginSlice from "./loginSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    searchHistory: searchSlice,
    auth: loginSlice,
  },
});

export default store;
