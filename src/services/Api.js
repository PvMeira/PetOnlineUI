import axios from "axios";
import { store } from "../configuration/redux/store";

const customAxios = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  headers: {
    post: {
      "Content-Type": "application/json",
    },
    put: {
      "Content-Type": "application/json",
    },
  },
});

customAxios.interceptors.request.use(
  (config) => {
    const state = store.getState();
    console.log("ENTROU");
    if (!config.url.endsWith("signin")) {
      config.headers.Authorization = `Bearer ${state.login.token}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default customAxios;
