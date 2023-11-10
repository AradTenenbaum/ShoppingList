import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

const initialState: number = 0;

export const totalItemsSlice = createSlice({
  name: "totalItems",
  initialState,
  reducers: {
    setTotalItems: (_, action: PayloadAction<number>) => action.payload,
    addItem: (state) => state + 1,
    deleteItem: (state) => state - 1,
  },
});

export const { setTotalItems, addItem, deleteItem } = totalItemsSlice.actions;

export const selectPurchase = (state: RootState) => state.totalItems;

export default totalItemsSlice.reducer;
