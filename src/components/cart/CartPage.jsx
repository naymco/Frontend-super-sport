import React, { Component, Fragment } from "react";

import { Cart } from "./Cart";
import CartRepository from "./cartRepository";

import Header from "../Header";

import "../../assets/css/Cart.css";
import { connect } from "react-redux";

class CartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      pedido: {
        productsId: [],
        totalPrice: 0
      }
    };
  }

  onChange = event => {
    event.preventDefault();
    const cart = JSON.parse(localStorage.getItem("redux_localstorage_simple"));
    cart[event.target.name] = event.target.value;
    console.log(cart.productDetails.id);
    this.setState({
      cart: cart,
      pedido: {
        totalPrice: cart.productDetails.precio,
        productsId: cart.productDetails.id
      }
    });
  };

  onSubmit = event => {
    event.preventDefault();
    const cart = JSON.parse(localStorage.getItem("redux_localstorage_simple"));

    console.log(cart.productDetails);
    CartRepository.addOrder(cart.productDetails)
      .then(res => {
        console.log(res);
        this.setState({
          cart: cart,
          pedido: {
            totalPrice: cart.productDetails.precio,
            productsId: cart.productDetails.id
          }
        });
        console.log(this.state.pedido);
        const cart = "cart";
        localStorage.setItem(cart, this.state.pedido);
      })
      .catch(error => {
        alert("Algo salió mal: error: " + error);
        console.log(error);
      });
  };
  render() {
    const shoppingCart = localStorage.getItem("cart");

    if (shoppingCart && this.state.redirect === true) {
      //  let userStorage = JSON.parse(localStorage.getItem("users"));
      let cartStorage = JSON.parse(localStorage.getItem("cart"));

      return (
        <div className="shopping-cart">
          {cartStorage.map(cart => {
            console.log(cart);
            return (
              <div key={cart.id}>
                <h3>Pedido realizado correctamente</h3>
                <img src={cart.img_url} alt={cart.nombre} />
                <div className="shopping-description">
                  <h3> {cart.nombre}</h3>
                  <p> {cart.descripcion} </p>
                  <p> {cart.precio} </p>
                  <form>
                    <button>Seguir comprando</button>
                    <button>Pagar</button>
                  </form>
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
          <div className="container-cart">
            <Cart
              cart={this.state.cart}
              onChange={this.onChange}
              onSubmit={this.onSubmit}
            />
          </div>
        </Fragment>
      );
    }
  }
}

export default connect()(CartPage);
