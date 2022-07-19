import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import todoSlice from "../features/todoSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
