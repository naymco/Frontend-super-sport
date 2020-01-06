import React, { Component } from "react";
import utils from "./utils";

export default class ShoppingCart extends Component {
  render() {
    const { cartItems } = this.props;

    return (
      <div className="alert">
        {cartItems.length === 0 ? (
          "Tu cesta está vacía"
        ) : (
          <div> Tienes {cartItems.length} productos en la cesta </div>
        )}
        {cartItems.length > 0 && (
          <div>
            <ul className="basket-list" style={{ marginLeft: -25 }}>
              {cartItems.map(item => (
                <li className="products-list" key={item.id}>
                  <img
                    className="product-image"
                    src={item.img_url}
                    alt={item.nombre}
                  />
                  <b>{item.nombre}</b>
                  <p className="precio-cantidad">
                    {item.count} x {utils.formatCurrency(item.precio)}
                  </p>
                  <button
                    style={{ float: "right " }}
                    className="btn-delete"
                    onClick={event =>
                      this.props.handleRemoveFromCart(event, item)
                    }
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>

            <b>
              Precio Total:
              {utils.formatCurrency(
                cartItems.reduce((a, c) => a + c.precio * c.count, 0)
              )}
            </b>
            <button
              onClick={() => alert(" Agregado a la cesta. ")}
              className="btn-checkout"
            >
              checkout
            </button>
          </div>
        )}
      </div>
    );
  }
}
