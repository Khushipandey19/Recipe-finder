import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./slice/strategySlice";
const store = configureStore({
  reducer: dataSlice,
});
export default store;
