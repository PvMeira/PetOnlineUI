import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ItemEdit from "../../../screens/storage/edit";
import GenericNotFound from "../../../screens/notFound";
import ServicesList from "../../../screens/services";
import Home from "../../../screens/home";
import ItemList from "../../../screens/storage";
import ServicesEdit from "../../../screens/services/edit";

const ApiRoute = () => {
  return (
    <Switch>
      <Route exact path={"/"} component={Home} />
      <Route exact path={"/storage"} component={ItemList} />
      <Route
        exact
        path={"/storage/new"}
        component={() => <ItemEdit isEdit={false} />}
      />
      <Route exact path={"/storage/:id"} component={ItemEdit} />
      <Route exact path={"/services"} component={ServicesList} />
      <Route
        exact
        path={"/services/new"}
        component={() => <ServicesEdit isEdit={false} />}
      />
      <Route exact path={"/services/:id"} component={ServicesEdit} />
      <Route path='/404' component={GenericNotFound} />
      <Redirect to='/404' />
    </Switch>
  );
};

export default ApiRoute;
