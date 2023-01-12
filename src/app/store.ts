import { configureStore } from "@reduxjs/toolkit";
import demo from "@/app/slices/demoSlice";
export const store = configureStore({
  reducer: {
    // Something in here
    demo,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
