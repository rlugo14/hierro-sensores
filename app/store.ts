import { configureStore } from "@reduxjs/toolkit";
import malpasoReducer from "../features/measures/malpasoSlice";
import fronteraReducer from "../features/measures/fronteraSlice";
import dehesaReducer from "../features/measures/dehesaSlice";
import timijiraqueReducer from "../features/measures/timijiraqueSlice";
import tabsSelectionReducer from "../features/tabsSelection/tabsSelectionSlice";

export const store = configureStore({
  reducer: {
    malpasoReducer,
    fronteraReducer,
    dehesaReducer,
    timijiraqueReducer,
    tabsSelectionReducer,
  },
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
