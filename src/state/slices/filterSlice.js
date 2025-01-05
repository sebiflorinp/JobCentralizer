import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cities: [],
  experience: [],
  sources: [],
  jobTypes: [],
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    addCity: (state, action) => {
      state.cities.push(action.payload);
    },

    removeCity: (state, action) => {
      state.cities = state.cities.filter((city) => city !== action.payload);
    },

    addExperience: (state, action) => {
      state.experience.push(action.payload);
    },

    removeExperience: (state, action) => {
      state.experience = state.experience.filter(
        (exp) => exp !== action.payload,
      );
    },

    addSource: (state, action) => {
      state.sources.push(action.payload);
    },

    removeSource: (state, action) => {
      state.sources = state.sources.filter(
        (source) => source !== action.payload,
      );
    },

    addJobType: (state, action) => {
      state.jobTypes.push(action.payload);
    },

    removeJobType: (state, action) => {
      state.jobTypes = state.jobTypes.filter(
        (jobType) => jobType !== action.payload,
      );
    },
  },
});

export const {
  addCity,
  removeCity,
  addExperience,
  removeExperience,
  addSource,
  removeSource,
  addJobType,
  removeJobType,
} = filterSlice.actions;

export default filterSlice.reducer;
