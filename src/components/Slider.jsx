import React from "react";
import { Slide } from "react-slideshow-image";

import "../assets/css/Slider.css";

const slideImages = [
  {
    nombre: "PUMA Future 4.4 FG/AG Jr, Botas de fútbol Unisex Niños",
    precio: "24.99€",
    image:
      "https://m.media-amazon.com/images/I/71L8bjmzPRL._AC_UL480_FMwebp_QL65_.jpg"
  },
  {
    nombre: "GHB Carpeta Táctica Plegable para Entrenamiento de Fútbol",
    precio: "15.60€",
    image:
      "https://m.media-amazon.com/images/I/61mmH0gsiNL._AC_UL480_FMwebp_QL65_.jpg"
  },
  {
    nombre: "Rovtop 6 En 1 Carpeta Táctica para Entrenamiento de Fútbol",
    precio: "16.99€",
    image:
      "https://m.media-amazon.com/images/I/71xalltKdML._AC_UL480_FMwebp_QL65_.jpg"
  }

  // {"https://m.media-amazon.com/images/I/71L8bjmzPRL._AC_UL480_FMwebp_QL65_.jpg"},
  // {"https://m.media-amazon.com/images/I/61mmH0gsiNL._AC_UL480_FMwebp_QL65_.jpg"},
  // {"https://m.media-amazon.com/images/I/71xalltKdML._AC_UL480_FMwebp_QL65_.jpg"}
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    // console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
};

const Slider = () => {
  return (
    <div className="slide-container">
      <Slide {...properties}>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[0].image})` }}>
            <span>{slideImages[0].nombre}</span>
            <span>{slideImages[0].precio}</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[1].image})` }}>
            <span>{slideImages[1].nombre}</span>
            <span>{slideImages[1].precio}</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[2].image})` }}>
            <span>{slideImages[2].nombre}</span>
            <span>{slideImages[2].precio}</span>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Slider;
