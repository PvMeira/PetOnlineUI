import React from "react";
import { Backdrop, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { toggleLoading } from "../../../configuration/redux/reducers/application/application-selectors";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

export const Loading = () => {
  const app = useSelector(toggleLoading);

  const classes = useStyles();
  return (
    <Backdrop className={classes.backdrop} open={app}>
      <CircularProgress color='inherit' />
    </Backdrop>
  );
};
export default Loading;
