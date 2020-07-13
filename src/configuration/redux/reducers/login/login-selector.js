import { createSelector } from "reselect";

const selectLogin = (state) => state.login;

export const isAuthenticated = createSelector(
  [selectLogin],
  (login) => login.isAuthenticated
);
