import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/about/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
