import { configureStore } from "@reduxjs/toolkit";
import demo from "@/app/slices/demoSlice";
import listenerDemoMiddleware from "./middleware/demoMiddleware";
export const store = configureStore({
  reducer: {
    // Something in here
    demo,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerDemoMiddleware.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
