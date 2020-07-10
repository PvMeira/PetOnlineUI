import { AppActionTypes } from "./application-types";

const INITIAL_STATE = {
  toggleLoading: false,
};

const applicationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AppActionTypes.TOOGLE_LOADING:
      return {
        ...state,
        toggleLoading: !state.toggleLoading,
      };

    default:
      return state;
  }
};

export default applicationReducer;
