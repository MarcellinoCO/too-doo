import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: "all",
  reducers: {
    toggleFilter: (_, action) => action.payload,
  },
});

export default filterSlice.reducer;
export const { toggleFilter } = filterSlice.actions;
