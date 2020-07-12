import { createMuiTheme } from "@material-ui/core";
import { colors } from "../../assets";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: colors.primaryLight1,
      main: colors.primary,
      dark: colors.primaryDark1,
      contrastText: colors.white,
    },
    secondary: {
      light: colors.secondaryLight1,
      main: colors.secondary,
      dark: colors.secondaryDark1,
      contrastText: colors.white,
    },
  },
});

export default theme;
