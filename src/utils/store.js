import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    searchHistory: searchSlice,
  },
});

export default store;
