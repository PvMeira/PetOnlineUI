import { AppActionTypes } from "./application-types";

export const toggleLoading = () => ({
  type: AppActionTypes.TOOGLE_LOADING,
});

// Sucess
export const toggleSuccessMessage = (message) => ({
  type: AppActionTypes.SUCCESS_MESSAGE,
  payload: { status: true, message },
});
export const dismissSuccessMessage = () => ({
  type: AppActionTypes.SUCCESS_MESSAGE,
  payload: { status: false, message: "" },
});

// Warning
export const toggleWarningMessage = (message) => ({
  type: AppActionTypes.WARNING_MESSAGE,
  payload: { status: true, message },
});
export const dismissWarningMessage = () => ({
  type: AppActionTypes.WARNING_MESSAGE,
  payload: { status: false, message: "" },
});

// Error
export const toggleErrorMessage = (message) => ({
  type: AppActionTypes.ERROR_MESSAGE,
  payload: { status: true, message },
});
export const dismissErrorMessage = () => ({
  type: AppActionTypes.ERROR_MESSAGE,
  payload: { status: false, message: "" },
});
