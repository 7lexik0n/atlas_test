import { configureStore } from "@reduxjs/toolkit";
import componentsSlice from "./componentsSlice";
import countersSlice from "./countersSlice";

export const store = configureStore({
  reducer: {
    components: componentsSlice,
    counters: countersSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
