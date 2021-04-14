import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export enum TabsSelection {
  MALPASO,
  FRONTERA,
  LA_DEHESA,
  TIMIJIRAQUE,
}

interface TabsSelectionState {
  index: TabsSelection;
}

const initialState: TabsSelectionState = {
  index: 0,
};

export const tabsSelectionSlice = createSlice({
  name: "tabsSelection",
  initialState,
  reducers: {
    set: (state, action: PayloadAction<TabsSelection>) => {
      state.index = action.payload;
    },
  },
});

export const { set } = tabsSelectionSlice.actions;

export const selectIndex = (state: RootState) =>
  state.tabsSelectionReducer.index;

export default tabsSelectionSlice.reducer;
