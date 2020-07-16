import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Copyright from "./coopyright";
import useStyles from "./styles";
import { strings } from "../../configuration/assets";
import { Formik } from "formik";
import { doLogin } from "../../configuration/redux/reducers/login/login-actions";
import {
  toggleSuccessMessage,
  toggleErrorMessage,
  toggleLoading,
} from "../../configuration/redux/reducers/application/application-actions";
import schemaValidation from "./formUtils";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { primaryPaths } from "../../configuration/core/route/Address";

import { login } from "../../services/LoginService";

const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const [form] = useState({ email: "", password: "" });

  const submitLogin = async (values) => {
    dispatch(toggleLoading());
    const { email, password } = values;
    await login(email, password)
      .then(({ data }) => {
        dispatch(doLogin(data.token, data.username));
        dispatch(toggleSuccessMessage(`Login sucessful !`));
        history.push(primaryPaths.home);
      })
      .catch(() => dispatch(toggleErrorMessage("Invalid Email or Password.")))
      .finally(() => {
        dispatch(toggleLoading());
      });
  };

  return (
    <Formik
      initialValues={form}
      enableReinitialize={true}
      validateOnBlur={true}
      validateOnMount={false}
      validationSchema={schemaValidation}
      onSubmit={(values) => submitLogin(values)}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <Grid container component='main' className={classes.root}>
          <CssBaseline />
          <Grid item xs={false} sm={4} md={7} className={classes.image} />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component='h1' variant='h5'>
                {strings.screens.login.signIn}
              </Typography>
              <form className={classes.form} onSubmit={handleSubmit}>
                <TextField
                  variant='outlined'
                  margin='normal'
                  error={errors.email}
                  helperText={errors.email && touched.email && errors.email}
                  fullWidth
                  id='email'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label={strings.screens.login.email}
                  name='email'
                  value={values.email}
                  autoComplete='email'
                  autoFocus
                />
                <TextField
                  id='password'
                  name={"password"}
                  variant='outlined'
                  type='password'
                  margin='normal'
                  error={errors.password}
                  helperText={
                    errors.password && touched.password && errors.password
                  }
                  fullWidth
                  label={strings.screens.login.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                  autoComplete='current-password'
                />
                <FormControlLabel
                  control={<Checkbox value='remember' color='primary' />}
                  label={strings.screens.login.rememberMe}
                />
                <Button
                  type='submit'
                  fullWidth
                  variant='contained'
                  color='primary'
                  className={classes.submit}
                >
                  {strings.screens.login.signIn}
                </Button>
                <Box mt={5}>
                  <Copyright />
                </Box>
              </form>
            </div>
          </Grid>
        </Grid>
      )}
    </Formik>
  );
};

export default Login;
