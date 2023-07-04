import { configureStore } from "@reduxjs/toolkit";
import codeSlice from "./features/codeSlice";

const store = configureStore({
  reducer: {
    code: codeSlice,
  },
});

export default store;
