import React from "react";
import ApiRoute from "./configuration/core/route";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./configuration/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import MenuBar from "./components/global/menuBar";
import Loading from "./components/global/loading";
import SnackBar from "./components/global/snackBar";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./configuration/core/style";

function App() {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <PersistGate persistor={persistor}>
            <Loading />
            <SnackBar />
            <MenuBar>
              <ApiRoute />
            </MenuBar>
          </PersistGate>
        </BrowserRouter>
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;
