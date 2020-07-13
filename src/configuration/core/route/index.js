import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ItemEdit from "../../../screens/storage/edit";
import GenericNotFound from "../../../screens/notFound";
import ServicesList from "../../../screens/services";
import Home from "../../../screens/home";
import ItemList from "../../../screens/storage";
import ServicesEdit from "../../../screens/services/edit";
import Login from "../../../screens/login";
import ProtectedRoute from "../../../components/global/protectedRoute";

const ApiRoute = () => {
  return (
    <Switch>
      <Route exact path={"/login"} component={Login} />
      <ProtectedRoute exact path={"/"} component={Home} />
      <ProtectedRoute exact path={"/storage"} component={ItemList} />
      <ProtectedRoute
        exact
        path={"/storage/new"}
        component={() => <ItemEdit isEdit={false} />}
      />
      <ProtectedRoute exact path={"/storage/:id"} component={ItemEdit} />
      <ProtectedRoute exact path={"/services"} component={ServicesList} />
      <ProtectedRoute
        exact
        path={"/services/new"}
        component={() => <ServicesEdit isEdit={false} />}
      />
      <ProtectedRoute exact path={"/services/:id"} component={ServicesEdit} />
      <Route path='/404' component={GenericNotFound} />
      <Redirect to='/404' />
    </Switch>
  );
};

export default ApiRoute;
