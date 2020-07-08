import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../../configuration/assets";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: colors.white,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    backgroundColor: colors.white,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: colors.white,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default useStyles;
