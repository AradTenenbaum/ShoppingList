import totalItems from "./totalItems";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    totalItems: totalItems,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
