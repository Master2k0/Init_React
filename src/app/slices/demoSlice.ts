import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/app/store";
import { IDemoSlice } from "types/redux/demoSlice.d";
import { useSelector } from "react-redux";
import { getDemoById } from "@/app/thunks/demoThunk";

const initialState: IDemoSlice = {
  value: 0,
  loading: false,
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
  extraReducers: (builder) => {
    builder.addCase(getDemoById.pending, (state, action) => {
      state.loading = true;
      // Do something here while wait api resonse
    });
    builder.addCase(getDemoById.fulfilled, (state, action) => {
      // Do something with data from api response
      state.loading = false;
      state.value = action.payload?.initValue as unknown as number;
    });
    builder.addCase(getDemoById.rejected, (state, action) => {
      // Do something when call api fail
      state.loading = false;
    });
  },
});

const { actions, reducer } = demoSlice;

export const { increment, decrement, incrementByAmount } = actions;

export const selectDemo = (state: RootState) => state.demo.value;

export default reducer;
