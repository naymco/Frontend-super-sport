import React from "react";
import { Slide } from "react-slideshow-image";
import axios from "axios";

import "../assets/css/Slider.css";
import { Component } from "react";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      slideImages: [],
      properties: {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        arrows: true,
        onChange: (oldIndex, newIndex) => {
          // console.log(`slide transition from ${oldIndex} to ${newIndex}`);
        }
      }
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3001/products")
      .then(product => {
        let products = product.data;
        console.log(products);
        this.setState({ products: products });
      })
      .catch(error => {
        console.log(error);
      });
  }

  // const slideImages = [
  //   {
  //     nombre: "PUMA Future 4.4 FG/AG Jr, Botas de fútbol Unisex Niños",
  //     precio: "24.99€",
  //     image:
  //       "https://m.media-amazon.com/images/I/71L8bjmzPRL._AC_UL480_FMwebp_QL65_.jpg"
  //   },
  //   {
  //     nombre: "GHB Carpeta Táctica Plegable para Entrenamiento de Fútbol",
  //     precio: "15.60€",
  //     image:
  //       "https://m.media-amazon.com/images/I/61mmH0gsiNL._AC_UL480_FMwebp_QL65_.jpg"
  //   },
  //   {
  //     nombre: "Rovtop 6 En 1 Carpeta Táctica para Entrenamiento de Fútbol",
  //     precio: "16.99€",
  //     image:
  //       "https://m.media-amazon.com/images/I/71xalltKdML._AC_UL480_FMwebp_QL65_.jpg"
  //   }

  // {"https://m.media-amazon.com/images/I/71L8bjmzPRL._AC_UL480_FMwebp_QL65_.jpg"},
  // {"https://m.media-amazon.com/images/I/61mmH0gsiNL._AC_UL480_FMwebp_QL65_.jpg"},
  // {"https://m.media-amazon.com/images/I/71xalltKdML._AC_UL480_FMwebp_QL65_.jpg"}

  render() {
    const products = this.state.products;
    console.log(products);
    return (
      <div className="slide-container" key={products.id}>
        <Slide {...this.state.properties}>
          {this.state.products?.map(item => {
            console.log(item);
            return (
              <div className="slider-products" key={item.id}>
                <img
                  className="image-slider"
                  src={item.img_url}
                  alt={item.nombre}
                />
                <div className="title-product">
                  <h1> {item.nombre} </h1>
                  <p> {item.precio}€ </p>
                </div>
              </div>
            );
          })}
        </Slide>
      </div>
    );
  }
}

export default Slider;
