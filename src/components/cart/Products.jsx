import React, { Component } from "react";
import utils from "./utils";

export default class Products extends Component {
  render() {
    const productItems = this.props.products.map(product => (
      <div className="columna" key={product.id}>
        <div className="thumbnail">
          <a
            href={`#${product.id}`}
            onClick={event => this.props.handleAddToCart(event, product)}
          >
            <img src={product.img_url} alt={product.nombre} />
            <p> {product.nombre} </p>
          </a>
          <b> {utils.formatCurrency(product.precio)} </b>
          <button
            className="btn-add-cart"
            onClick={event => this.props.handleAddToCart(event, product)}
          >
            Agregar a la cesta
          </button>
        </div>
      </div>
    ));
    return <div className="columna">{productItems}</div>;
  }
}
