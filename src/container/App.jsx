import React, { Component } from "react";
import axios from "axios";

import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Slider from "../components/Slider.jsx";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { productos: [] };
  }
  componentDidMount() {
    axios
      .get(`http://localhost:3001/productos`)
      .then(items => {
        const productos = items.data;
        console.log(productos);
        this.setState({ productos });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <Header />
        <Slider />
        <div className="container">
          <p>Nombre: {this.props.nombre}</p>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
