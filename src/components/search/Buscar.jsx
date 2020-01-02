import React, { Component, Fragment } from "react";

class Buscar extends Component {
  constructor() {
    super();
    this.state = {
      search: []
    };
  }

  render() {
    return (
      <Fragment>
        <div className="search-component">
          <h1>Busqueda: Realmente no es aquí donde debe redirigirte </h1>
        </div>
      </Fragment>
    );
  }
}

export default Buscar;
