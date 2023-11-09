import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    item: [],
    resDetail: [],
    showCart: true,
  },
  reducers: {
    addItem: (state, action) => {
      state.item.push(action.payload);
    },
    removeItem: (state, action) => {
      state.item.splice(state.item.findIndex((e) => e?.id == action.payload),1)
    },
    clearCart: (state) => {
      state.item = [];
    },
    addResDetail: (state, action) => {
      state.resDetail[0] = action.payload;
    },
    toggleCart: (state,action) => {
      state.showCart = action.payload ;
    }
  },
});

export const { addItem, removeItem, clearCart, addResDetail, toggleCart } =
  cartSlice.actions;

export default cartSlice.reducer;
