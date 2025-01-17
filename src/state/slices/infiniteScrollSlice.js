import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: 1,
  searchText: "",
  cities: [],
  experience: [],
  sources: [],
  jobTypes: [],
};

export const infiniteScrollSlice = createSlice({
  name: "infiniteScroll",
  initialState,
  reducers: {
    updateSearchParamaters: (state, action) => {
      const { searchText, cities, experience, sources, jobTypes } =
        action.payload;
      state.searchText = searchText;
      state.cities = cities;
      state.experience = experience;
      state.sources = sources;
      state.jobTypes = jobTypes;
      state.page = 1;
    },

    updatePage: (state) => {
      state.currentPage = state.currentPage + 1;
    },
  },
});

export const { updateSearchParamaters, updatePage } =
  infiniteScrollSlice.actions;
export default infiniteScrollSlice.reducer;
