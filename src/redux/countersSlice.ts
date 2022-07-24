import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  [id: string]: {
    label: string;
    value: number;
    max?: number;
  };
}

const initialState: CounterState = {
  0: {
    label: "Пассажиры",
    value: 0,
  },
  1: {
    label: "Автобусы",
    value: 0,
  },
};

export const countersSlice = createSlice({
  name: "counters",
  initialState,
  reducers: {
    increaseCounter: (
      state,
      action: PayloadAction<{
        id: string;
        step: number;
      }>
    ) => {
      const { id, step } = action.payload;
      const max = state[id].max;
      const newValue = state[id].value + step;

      if (!max || newValue <= max) {
        state[id].value = newValue;
      }
    },
    decreaseCounter: (
      state,
      action: PayloadAction<{
        id: string;
        step: number;
      }>
    ) => {
      const { id, step } = action.payload;
      const newValue = state[id].value - step;

      if (newValue >= 0) {
        state[id].value = newValue;
      }
    },
  },
});

export const { increaseCounter, decreaseCounter } = countersSlice.actions;
export default countersSlice.reducer;
