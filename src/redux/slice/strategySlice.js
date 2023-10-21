import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  recipe: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.recipe= action.payload;
      console.log(state.recipe);
    },
  },
});

export const dataSliceActions = dataSlice.actions;
export default dataSlice.reducer;
