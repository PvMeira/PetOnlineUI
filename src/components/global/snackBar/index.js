import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import {
  successMessage,
  warningMessage,
  errorMessage,
} from "../../../configuration/redux/reducers/application/application-selectors";
import {
  dismissSuccessMessage,
  dismissErrorMessage,
  dismissWarningMessage,
} from "../../../configuration/redux/reducers/application/application-actions";

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const SnackBar = () => {
  const successMessageConst = useSelector(successMessage);
  const warningMessageConst = useSelector(warningMessage);
  const errorMessageConst = useSelector(errorMessage);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(dismissSuccessMessage());
    dispatch(dismissErrorMessage());
    dispatch(dismissWarningMessage());
  };
  return (
    <>
      <Snackbar
        open={successMessageConst.status}
        autoHideDuration={6000}
        onClose={handleClose}
        key='sucess-Snackbar'
      >
        <Alert onClose={handleClose} severity='success'>
          {successMessageConst.message}
        </Alert>
      </Snackbar>

      <Snackbar
        open={warningMessageConst.status}
        autoHideDuration={6000}
        onClose={handleClose}
        key='warning-Snackbar'
      >
        <Alert onClose={handleClose} severity='warning'>
          {warningMessageConst.message}
        </Alert>
      </Snackbar>

      <Snackbar
        open={errorMessageConst.status}
        autoHideDuration={6000}
        onClose={handleClose}
        key='error-Snackbar'
      >
        <Alert onClose={handleClose} severity='error'>
          {errorMessageConst.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default SnackBar;
