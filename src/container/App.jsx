import React, { Component } from "react";
import axios from "axios";

import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Slider from "../components/Slider.jsx";
import BarraBusqueda from "../components/BarraBusqueda.jsx";

import "./App.css";
import { setProductDetails } from "../actions/ProductDetails.js";

class App extends Component {
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
      })
      .catch(error => console.log(error));
  }

  // onInputChange(event) {
  //   let busqueda = event.target.value;
  //   const data = this.state.producto;
  //   // console.log(data);
  //   const newData = data.filter(item => {
  //     const itemData = item.nombre;
  //     const inputData = busqueda;
  //     // console.log(inputData);
  //     const busquedaFinal = itemData.indexOf(inputData) > -1;
  //     if (busquedaFinal === true) return busquedaFinal;
  //     return busquedaFinal;
  //   });
  //   this.setState({
  //     product: newData,
  //     titulo: busqueda
  //   });
  // }

  yepa() {
    for (let producto of this.state.productos) return producto.precio;
    // console.log(productos.nombre)
  }

  onInputChange(event) {
    let busqueda = event.target.value;
    const data = this.state.productos;
    // console.log(data);
    const newData = data.filter(item => {
      const itemData = item.nombre;
      const inputData = busqueda;
      console.log(inputData);
      const busquedaFinal = itemData.indexOf(inputData);
      if (busquedaFinal === true)
        // console.log(inputData)
        return busquedaFinal;

      // return busquedaFinal;
    });

    this.setState({
      productos: newData,
      titulo: busqueda
    });
  }

  goToProductDetails = item => {
    this.props.history.push(`/producto/${item.id}/${item.nombre}`);
    setProductDetails(item);
  };
  render() {
    return (
      <div>
        <Header />
        {/* <BarraBusqueda /> */}
        <Slider />

        <div className="container">
          {/* onChange = {text => this.onInputChange(text)} */}
          <form>
            <input
              type="text"
              placeholder="Buscar"
              value={this.state.titulo}
              onChange={text => this.onInputChange(text)}
            />
            <div>
              {this.yepa()}
              {/* {this.state.producto?.map(item => {
              return item.precio
             })} */}
            </div>

            {/* {this.state.producto} */}
          </form>
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
}

export default App;
