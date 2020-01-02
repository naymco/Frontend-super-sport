import React, { Component, Fragment } from "react";

import { BarraBusqueda } from "./BarraBusqueda";
import Buscar from "./Buscar";
import SearchRepository from "./searchRepository.jsx";

import Header from "../Header";

import "../../assets/css/BarraBusqueda.css";

class BusquedaPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: { nombre: "" }
    };
  }
  onChange = event => {
    event.preventDefault();
    let search = Object.assign({}, this.state.search);

    let searching = (search[event.target.name] = event.target.value);
    this.setState({ search: search });
    console.log(searching);
  };

  onSubmit = event => {
    event.preventDefault();
    const search = Object.assign({}, this.state.search);
    SearchRepository.getSearch(search)
      .then(res => {
        this.setState({ redirect: true });
        // el setState hará que el componente tome el nuevo estado
      })
      .catch(error => {
        alert("algo salió mal");
        console.log(error);
      });
  };

  render() {
    const findSearch = localStorage.getItem("search");

    if (findSearch && this.state.redirect === true) {
      let searchStore = JSON.parse(localStorage.getItem("search"));

      return (
        <div className="search-contenedor">
          {searchStore.map(item => {
            console.log(item);
            return (
              <div key={item.id}>
                <BarraBusqueda
                  onChange={this.onChange}
                  onSubmit={this.onSubmit}
                  search={this.state.search}
                />
                <div className="search-complete">
                  <img src={item.img_url} alt={item.nombre} />
                  <div className="search-description">
                    <h3> {item.nombre} </h3>
                    <p> {item.descripcion} </p>
                    <p> {item.precio} </p>
                    <form className="btn-search-again">
                      <button>Volver a buscar</button>
                      <button>Agregar al carrito</button>
                    </form>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
    } else {
      return (
        <Fragment>
          <Header />
          <div className="search-contenedor">
            <BarraBusqueda
              search={this.state.search}
              onChange={this.onChange}
              onSubmit={this.onSubmit}
            />
          </div>
        </Fragment>
      );
    }
  }
}

export default BusquedaPage;
