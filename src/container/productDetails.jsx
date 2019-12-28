import React, { Component } from "react";
import { connect } from "react-redux";
import "../assets/css/ProductDetails.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

class ProductDetails extends Component {
  renderProductDetails(item) {
    return (
      <div key={item.id} className="detalles-producto">
        <div className="imagen-titulo">
          <img src={item.img_url} alt="img-producto" />
        </div>
        <div className="detalles">
          <h4> Detalle del producto </h4>
          <h2>{item.nombre}</h2>
          <p>Descripción: {item.descripcion} </p>
          <p>Stock: {item.stock} </p>
          <p className="precio">Precio: {item.precio}€ </p>
          <p>{item.nombreCategoria} </p>
          <button className="añadirCarrito">Añadir al carrito</button>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <Header />
        {this.props.productDetails &&
          this.renderProductDetails(this.props.productDetails)}

        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    productDetails: state.productDetails
  };
}

export default connect(mapStateToProps)(ProductDetails);
