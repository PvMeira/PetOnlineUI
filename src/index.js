import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./configuration/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import MenuBar from "./components/global/menuBar";
import Loading from "./components/global/loading";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <Loading />
          <MenuBar>
            <App />
          </MenuBar>
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
require("dotenv").config();

serviceWorker.unregister();
