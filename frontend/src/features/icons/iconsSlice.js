import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favicon: "#",
  logo: "#",
  loading: false,
  error: null,
};

const iconsSlice = createSlice({
  initialState,
  name: "icons",
  reducers: {
    addIconsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    addIconsSuccess: (state, action) => {
      state.favicon = action.payload.favicon;
      state.logo = action.payload.logo;
      state.loading = false;
      state.error = null;
    },
    addIconsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { addIconsFailure, addIconsStart, addIconsSuccess } =
  iconsSlice.actions;

export default iconsSlice.reducer;
