import React, { Component } from "react";
import "../assets/css/BarraBusqueda.css";
import axios from "axios";

class BarraBusqueda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titulo: "",
      producto: []
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:3001/products`)
      .then(items => {
        this.setState({ producto: items.data });
      })
      .catch(error => console.log(error));
  }

  onInputChange(event) {
    let busqueda = event.target.value;
    const data = this.state.producto;
    console.log(data);
    const newData = data.filter(item => {
      const itemData = item.nombre.toUpperCase();
      const inputData = busqueda.toUpperCase();
      console.log(inputData);
      const busquedaFinal = itemData.indexOf(inputData) > -1;
      if (busquedaFinal === true) return busquedaFinal;
      return console.log(busquedaFinal);
    });
    this.setState({
      product: newData,
      titulo: busqueda
    });
  }

  render() {
    return (
      <div className="buscador">
        <form>
          <input
            type="text"
            placeholder="Buscar"
            value={this.state.titulo}
            onChange={text => this.onInputChange(text)}
          />
        </form>
      </div>
    );
  }
}

export default BarraBusqueda;
