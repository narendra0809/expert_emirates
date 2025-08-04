import axios from "axios";
import { store } from "../redux/store";
import { SERVER_URI } from "../constants/index.d";
import { logout } from "../features/user/userSlice";

const api = axios.create({
  baseURL: SERVER_URI,
});

api.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const token = state.user.token;
    const expiresAt = state.user.expiresAt || localStorage.getItem("expiresAt");
    if (token) {
      if (expiresAt && Date.now() > Number(expiresAt)) {
        store.dispatch(logout());
        localStorage.removeItem("token");
        localStorage.removeItem("expiresAt");
        window.location.href = "/login";
        return Promise.reject(new Error("Token expired"));
      }
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
