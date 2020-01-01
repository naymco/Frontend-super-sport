import React, { Component, Fragment } from "react";

import { Redirect } from "react-router-dom";

import { BarraBusqueda } from "./BarraBusqueda";
import Buscar from "./Buscar";
import SearchRepository from "./searchRepository.jsx";

import Header from "../Header";

import "../../assets/css/BarraBusqueda.css";
import { Route } from "react-router-dom";

class BusquedaPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: { nombre: "" }
    };
  }
  onChange = event => {
    let search = Object.assign({}, this.state.search);
    search[event.target.name] = event.target.value;
    this.setState({ search: search });
    console.log(search);
  };

  onSubmit = event => {
    event.preventDefault();
    const search = Object.assign({}, this.state.search);
    SearchRepository.getSearch(search)
      .then(res => {
        console.log(res);
        // este console.log muestra la búsqueda, se supone que de aquí debería redidigir o mostrar la información de alguna forma. Lo estaba intentando con
        // el redirect pero no sé como va.
      })
      .catch(error => {
        alert("algo salió mal");
        console.log(error);
      });
  };

  render() {
    return (
      <Fragment>
        <Header />
        <div className="search-contenedor">
          <BarraBusqueda
            search={this.state.search}
            onChange={this.onChange}
            onSubmit={this.onSubmit}
            hadleSearch={this.hadleSearch}
          />
        </div>
      </Fragment>
    );
  }
}

export default BusquedaPage;
