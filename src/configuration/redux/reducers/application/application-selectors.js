import { createSelector } from "reselect";

const selectApp = (state) => state.app;

export const toggleLoading = createSelector(
  [selectApp],
  (app) => app.toggleLoading
);
