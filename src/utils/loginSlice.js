import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "auth",
  initialState: {
    isLogin: false,
  },
  reducers: {
    toggleLogin: (state, action) => {
      state.isLogin = action.payload;
    },
  },
});

export const { toggleLogin } = loginSlice.actions;
export default loginSlice.reducer;
