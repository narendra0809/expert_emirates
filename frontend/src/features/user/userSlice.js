import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  token: null,
  expiresAt: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
      state.expiresAt = null;
    },
    loginSuccess: (state, action) => {
      state.currentUser = action.payload.user;
      state.token = action.payload.token;
      const expiryTime = Date.now() + 2 * 60 * 60 * 1000;
      state.expiresAt = expiryTime;
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("expiresAt", expiryTime);
      state.loading = false;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.expiresAt = null;
    },
    logout: (state) => {
      state.currentUser = null;
      state.token = null;
      state.expiresAt = null;
      localStorage.removeItem("token");
      localStorage.removeItem("expiresAt");
    },
    updateUserStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    updateUserSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    updateUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  loginFailure,
  loginStart,
  loginSuccess,
  logout,
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
} = userSlice.actions;

export default userSlice.reducer;
