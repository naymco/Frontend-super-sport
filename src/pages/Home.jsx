import React, { Component } from "react";

class Home extends Component {
  // constructor() {
  //   super();
  //   this.state = { productos: [] };
  // }
  // componentDidMount() {
  //   axios
  //     .get(`http://localhost:3001/productos`)
  //     .then(items => {
  //       const productos = items.data;

  //       this.setState({ productos });
  //     })
  //     .catch(error => console.log(error));
  // }
  render() {
    return (
      <div>
        <p>Nombre: {this.props.nombre}</p>
      </div>
    );
  }
}

export default Home;
