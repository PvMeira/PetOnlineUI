import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./screens/home/index";
import GenericNotFound from "./screens/notFound";
import ItemList from "./screens/storage/items";
import ItemEdit from "./screens/storage/items/edit";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/storage"} component={ItemList} />
        <Route
          exact
          path={"/storage/new"}
          component={() => <ItemEdit isEdit={false} match={null} />}
        />
        <Route exact path={"/storage/:id"} component={ItemEdit} />
        <Route path='/404' component={GenericNotFound} />
        <Redirect to='/404' />
      </Switch>
    </div>
  );
}

export default App;
