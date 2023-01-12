import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/app/store";
import { IDemoSlice } from "types/redux/demoSlice.d";
import { useSelector } from "react-redux";

const initialState: IDemoSlice = {
  value: 0,
};

export const demoSlice = createSlice({
  name: "demo",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = demoSlice.actions;

export const selectDemo = (state: RootState) => state.demo.value;

export default demoSlice.reducer;
