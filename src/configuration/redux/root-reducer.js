import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import applicationReducer from "./reducers/application/application-reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
};

const rootReducer = combineReducers({
  app: applicationReducer,
});

export default persistReducer(persistConfig, rootReducer);
