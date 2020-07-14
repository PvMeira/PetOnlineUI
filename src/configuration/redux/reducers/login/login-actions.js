import LoginActionTypes from "./login-types";

export const toggleAuthenticated = () => ({
  type: LoginActionTypes.TOOGLE_AUTHENTICATED,
});

export const doLogin = (token, username) => ({
  type: LoginActionTypes.DO_LOGIN,
  payload: { token, username },
});

export const doLogout = () => ({
  type: LoginActionTypes.DO_LOGOUT,
});
