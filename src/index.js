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
import SnackBar from "./components/global/snackBar";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { colors } from "./configuration/assets";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: colors.primaryLight1,
      main: colors.primary,
      dark: colors.primaryDark1,
      contrastText: "#fff",
    },
    secondary: {
      light: colors.secondaryLight1,
      main: colors.secondary,
      dark: colors.secondaryDark1,
      contrastText: "#000",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <PersistGate persistor={persistor}>
            <Loading />
            <SnackBar />
            <MenuBar>
              <App />
            </MenuBar>
          </PersistGate>
        </BrowserRouter>
      </MuiThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
require("dotenv").config();

serviceWorker.unregister();
