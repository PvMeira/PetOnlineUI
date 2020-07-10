import { AppActionTypes } from "./application-types";

export const toggleLoading = () => ({
  type: AppActionTypes.TOOGLE_LOADING,
});

export const toggleSuccessMessage = () => ({
  type: AppActionTypes.SUCCESS_MESSAGE,
  payload: { value: true },
});
export const dismissSuccessMessage = () => ({
  type: AppActionTypes.SUCCESS_MESSAGE,
  payload: { value: false },
});
