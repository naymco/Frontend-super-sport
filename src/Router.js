import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Products from "./pages/Products";
import App from "./container/App";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/products" component={Products} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
