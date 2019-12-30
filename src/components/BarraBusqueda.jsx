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
      .get(`http://localhost:3001/products/productos`)
      .then(items => {
        this.setState({ producto: items.data });
      })
      .catch(error => console.log(error));
  }



  onInputChange(event) {
    let busqueda = event.target.value;
    const data = this.state.producto;
    // console.log(data);
    const newData =  data.filter(item=> {
      const itemData = item.nombre;
      const inputData = busqueda;
      // console.log(inputData);
      const busquedaFinal = itemData.indexOf(inputData) > -1;
      if (busquedaFinal === true) return busquedaFinal;
      console.log(inputData)
      // return busquedaFinal;
      
    });
    
    this.setState({
      producto: newData,
      titulo: busqueda
    });
  }

  yepa() {
    for (let productos of this.state.producto)
     return productos.nombre
      // console.log(productos.nombre)
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
          <div>
            {this.yepa()}
            {/* {this.state.producto?.map(item => {
              return item.precio
             })} */}
          </div>
         
          {/* {this.state.producto} */}
   
        </form>
        </div >
    );
  }
}

export default BarraBusqueda;
