import { createSelector } from "reselect";

const selectLogin = (state) => state.login;

export const isAuthenticated = createSelector(
  [selectLogin],
  (login) => login.isAuthenticated
);

export const getToken = createSelector([selectLogin], (login) => login.token);

export const getUsername = createSelector(
  [selectLogin],
  (login) => login.username
);
