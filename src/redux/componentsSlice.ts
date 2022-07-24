import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TabItem } from "../components/ui/Tabs/types";

interface ComponentsState {
  components: TabItem[];
  activeTab: string;
}

const initialState: ComponentsState = {
  components: [
    { label: "Primary Buttons", id: "0" },
    { label: "Secondary Buttons", id: "1" },
    { label: "Primary Inputs", id: "2" },
    { label: "Secondary Inputs", id: "3" },
  ],
  activeTab: "0",
};

export const componentsSlice = createSlice({
  name: "components",
  initialState,
  reducers: {
    setActiveTab: (state, action: PayloadAction<string>) => {
      state.activeTab = action.payload;
    },
  },
});

export const { setActiveTab } = componentsSlice.actions;
export default componentsSlice.reducer;
