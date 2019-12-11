import React, { Component } from "react";

class Home extends Component {
  constructor(props){
    super(props);

    this.state ={
      productos: 
    }
  }
  render() {
    return (
      <div>
        <p>Nombre: {this.props.productos}</p>
      </div>
    );
  }
}

export default Home;
