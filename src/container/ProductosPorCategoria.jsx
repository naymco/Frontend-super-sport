import React, { Component } from "react";
import axios from "axios";
import { setProductDetails } from "../actions/ProductDetails.js";

import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Slider from "../components/Slider.jsx";

import "./App.css";

class ProductosPorCategoria extends Component {
  constructor() {
    super();
    this.state = {
      productos: []
    };
  }
  componentDidMount() {
    axios
      .get(`http://localhost:3001/products/`)
      .then(items => {
        const productos = items.data;
        this.setState({ productos });
        console.log(items.data);
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <Header />
        <Slider />
        <div className="container">
          {this.state.productos?.map(item => {
            return (
              <div key={item.id} className="items-productos">
                <img className="imagen" src={item.img_url} alt="poster" />
                <div className="detalleProducto">
                  <h2>{item.nombre}</h2>
                  <p className="precio"> {item.precio}€ </p>

                  <div
                    onClick={this.goToProductDetails.bind(this, item)}
                    className="btn-detalle-producto"
                  >
                    Más información
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Footer />
      </div>
    );
  }

  goToProductDetails = item => {
    this.props.history.push(`/producto/${item.id}/${item.nombre}`);
    setProductDetails(item);
  };
}

export default ProductosPorCategoria;
