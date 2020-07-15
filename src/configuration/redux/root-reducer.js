import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import applicationReducer from "./reducers/application/application-reducer";
import loginReducer from "./reducers/login/login-reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["login"],
};

const rootReducer = combineReducers({
  app: applicationReducer,
  login: loginReducer,
});

export default persistReducer(persistConfig, rootReducer);
