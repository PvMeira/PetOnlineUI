import LoginActionTypes from "./login-types";

const INITIAL_STATE = {
  isAuthenticated: false,
  token: "",
  username: "",
};

const applicationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LoginActionTypes.TOOGLE_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: !state.isAuthenticated,
      };
    case LoginActionTypes.DO_LOGIN:
      return {
        ...state,
        token: action.payload.token,
        username: action.payload.username,
        isAuthenticated: true,
      };
    case LoginActionTypes.DO_LOGOUT:
      return {
        ...state,
        token: "",
        username: "",
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default applicationReducer;
