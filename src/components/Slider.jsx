import React, { Component } from "react";
import "../assets/css/Slider.css";

class Slider extends Component {
  render() {
    return (
      <div>
        <div id="slider" className="slider">
          <h1>Bienvenidos a SuperSport SS</h1>
          <a href="/products" className="btn-slider">
            Ir a Productos
          </a>
        </div>
      </div>
    );
  }
}

export default Slider;
