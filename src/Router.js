import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Products from "./container/Products";
//import Registro from "./container/Registro";
import SignUpPage from "./container/SignUpPage.jsx";
import LoginPage from "./container/LoginPage";
import App from "./container/App";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/products" component={Products} />
        <Route path="/auth/register" component={SignUpPage} />
        <Route path="/auth/login" component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
