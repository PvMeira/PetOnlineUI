import { createSelector } from "reselect";

const selectApp = (state) => state.app;

export const toggleLoading = createSelector(
  [selectApp],
  (app) => app.toggleLoading
);

export const successMessage = createSelector(
  [selectApp],
  (app) => app.toggleSuccessMessage
);

export const warningMessage = createSelector(
  [selectApp],
  (app) => app.toggleWarningMessage
);

export const errorMessage = createSelector(
  [selectApp],
  (app) => app.toggleErrorMessage
);
