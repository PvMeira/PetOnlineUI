import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ItemEdit from "../../../screens/storage/edit";
import GenericNotFound from "../../../screens/notFound";
import ServicesList from "../../../screens/services";
import Home from "../../../screens/home";
import ItemList from "../../../screens/storage";
import ServicesEdit from "../../../screens/services/edit";
import Login from "../../../screens/login";
import SalesIndex from "../../../screens/sales";
import ProtectedRoute from "../../../components/global/protectedRoute";
import { paths, primaryPaths } from "./Address";
import NewSale from "../../../screens/sales/new";

const ApiRoute = () => {
  return (
    <Switch>
      <Route exact path={primaryPaths.login} component={Login} />
      <ProtectedRoute exact path={primaryPaths.home} component={Home} />
      <ProtectedRoute exact path={primaryPaths.storage} component={ItemList} />
      <ProtectedRoute
        exact
        path={paths.storage.new}
        component={() => <ItemEdit isEdit={false} />}
      />
      <ProtectedRoute exact path={paths.storage.edit} component={ItemEdit} />
      <ProtectedRoute
        exact
        path={primaryPaths.services}
        component={ServicesList}
      />
      <ProtectedRoute
        exact
        path={paths.services.new}
        component={() => <ServicesEdit isEdit={false} />}
      />
      <ProtectedRoute
        exact
        path={paths.services.edit}
        component={ServicesEdit}
      />
      <ProtectedRoute exact path={paths.sales.index} component={SalesIndex} />
      <ProtectedRoute exact path={paths.sales.new} component={NewSale} />
      <Route path={primaryPaths.notFound} component={GenericNotFound} />
      <Redirect to={primaryPaths.notFound} />
    </Switch>
  );
};

export default ApiRoute;
