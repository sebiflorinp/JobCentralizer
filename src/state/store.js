import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slices/filterSlice.js";
import InfiniteScrollSlice from "./slices/infiniteScrollSlice.js";

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    infiniteScroll: InfiniteScrollSlice,
  },
});
