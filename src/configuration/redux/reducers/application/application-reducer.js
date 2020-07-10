import { AppActionTypes } from "./application-types";

const INITIAL_STATE = {
  toggleLoading: false,
  toggleSuccessMessage: { status: false, message: "Success!" },
  toggleWarningMessage: { status: false, message: "Warning!" },
  toggleErrorMessage: { status: false, message: "Error!" },
};

const applicationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AppActionTypes.TOOGLE_LOADING:
      return {
        ...state,
        toggleLoading: !state.toggleLoading,
      };
    case AppActionTypes.SUCCESS_MESSAGE:
      return { ...state, toggleSuccessMessage: action.payload };
    case AppActionTypes.WARNING_MESSAGE:
      return { ...state, toggleWarningMessage: action.payload };
    case AppActionTypes.ERROR_MESSAGE:
      return { ...state, toggleErrorMessage: action.payload };

    default:
      return state;
  }
};

export default applicationReducer;
