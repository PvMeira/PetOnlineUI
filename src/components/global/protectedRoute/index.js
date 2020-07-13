import React from "react";
import { useSelector } from "react-redux";
import { isAuthenticated } from "../../../configuration/redux/reducers/login/login-selector";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuth = useSelector(isAuthenticated);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) {
          return <Component {...rest} {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
