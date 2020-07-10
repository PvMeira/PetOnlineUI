import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { successMessage } from "../../../configuration/redux/reducers/application/application-selectors";
import { dismissSuccessMessage } from "../../../configuration/redux/reducers/application/application-actions";

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const SnackBar = () => {
  const successMessageConst = useSelector(successMessage);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(dismissSuccessMessage());
  };
  return (
    <>
      <Snackbar
        open={successMessageConst}
        autoHideDuration={6000}
        onClose={handleClose}
        key='sucess-Snackbar'
      >
        <Alert onClose={handleClose} severity='success'>
          Actions was a success !
        </Alert>
      </Snackbar>
    </>
  );
};

export default SnackBar;
