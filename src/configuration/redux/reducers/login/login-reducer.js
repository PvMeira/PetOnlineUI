import LoginActionTypes from "./login-types";

const INITIAL_STATE = {
  isAuthenticated: false,
};

const applicationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LoginActionTypes.TOOGLE_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: !state.isAuthenticated,
      };
    default:
      return state;
  }
};

export default applicationReducer;
