import React, { Component } from "react";
export default class Filter extends Component {
  render() {
    return (
      <div className="fila">
        <div className="columna">{`${this.props.count} productos.`}</div>
        <div className="columna">
          <label>
            Ordenador por
            <select
              className="form-control"
              value={this.props.sort}
              onChange={this.props.handleSortChange}
            >
              <option value="">Seleccionar</option>
              <option value="lowestprice"> de menos a mayor</option>
              <option value="highestprice">de mayor a menor</option>
            </select>
          </label>
        </div>
      </div>
    );
  }
}
