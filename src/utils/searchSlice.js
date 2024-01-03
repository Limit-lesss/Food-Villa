import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "searchHistory",
  initialState: {
    history: [],
  },
  reducers: {
    addSearchResult: (state, action) => {
      state.history.push(action.payload);
    },
  },
});
export const { addSearchResult } = searchSlice.actions;
export default searchSlice.reducer;
