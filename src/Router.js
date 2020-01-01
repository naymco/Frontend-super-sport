import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import SignUpPage from "./container/SignUpPage.jsx";
import LoginPage from "./container/LoginPage";
import Categoria from "./container/Categorias";
import GestorInvProd from "./container/admin/gestorInveProd";
import ProductDetails from "./container/productDetails";
import BusquedaPage from "./components/search/BusquedaPage";
import Buscar from "./components/search/Buscar";
import ProductoCategoria from "./container/ProductosPorCategoria";
import App from "./container/App";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/productos" component={GestorInvProd} />
        <Route path="/categoria" component={Categoria} />
        <Route path="/auth/register" component={SignUpPage} />
        <Route path="/auth/login" component={LoginPage} />
        <Route path="/nombre" component={Buscar} />
        <Route path="/nombre/:nombre" component={BusquedaPage} />
        <Route path="/producto/:id/:nombre" component={ProductDetails} />
        <Route
          path="/products/:nombreCategoria"
          component={ProductoCategoria}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
