import axios from "axios";
import { store } from "../redux/store";
import { SERVER_URI } from "../constants/index.d";

const api = axios.create({
  baseURL: SERVER_URI,
});

api.interceptors.request.use(
  (config) => {
    const token = store.getState().user.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
