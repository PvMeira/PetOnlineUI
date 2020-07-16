import axios from "axios";
import { store } from "../configuration/redux/store";

import { toggleErrorMessage } from "../configuration/redux/reducers/application/application-actions";
import { doLogout } from "../configuration/redux/reducers/login/login-actions";

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

customAxios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response) {
      if (error.response.status === 403) {
        store.dispatch(
          toggleErrorMessage("You access has expired, please login again.")
        );
        store.dispatch(doLogout());
      }
    }
    return Promise.reject(error);
  }
);

customAxios.interceptors.request.use(
  (config) => {
    const state = store.getState();
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
