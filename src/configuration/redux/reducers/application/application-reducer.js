import { AppActionTypes } from "./application-types";

const INITIAL_STATE = {
  toggleLoading: false,
  toggleSuccessMessage: false,
  toggleWarningMessage: false,
  toggleErrorMessage: false,
};

const applicationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AppActionTypes.TOOGLE_LOADING:
      return {
        ...state,
        toggleLoading: !state.toggleLoading,
      };
    case AppActionTypes.SUCCESS_MESSAGE:
      return {
        ...state,
        toggleSuccessMessage: action.payload.value,
      };

    default:
      return state;
  }
};

export default applicationReducer;
