import React, { Component } from "react";
import axios from "axios";

import Header from "../components/Header";

class Categoria extends Component {
  constructor() {
    super();
    this.state = { categoria: [] };
  }
  componentDidMount() {
    axios
      .get(`http://localhost:3001/categoria`)
      .then(items => {
        const categoria = items.data;
        console.log(categoria);
        this.setState({ categoria });
      })
      .catch(error => console.log(error));
  }
  render() {
    return (
      <div className="container">
        <Header />

        {this.state.categoria.map(item => {
          return (
            <div>
              <p>{item.nombre} </p>
              <p>{item.descripcion} </p>
            </div>
          );
        })}
        <h1>Categorías</h1>
      </div>
    );
  }
}

export default Categoria;
