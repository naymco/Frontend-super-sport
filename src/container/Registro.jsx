import React, { Component, Fragment } from "react";
import axios from "axios";

import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

class Registro extends Component {
  constructor() {
    super();
    this.state = { user: [] };
  }

  componentDidMount() {
    axios
      .post(`http://localhost:3001/auth/register`)
      .then(items => {
        const users = items.data;
        console.log(users);
        this.setState({ users });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div>
          <form>
            <input type="text" placeholder="Nombre y Apellidos" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Dirección" />
            <input type="text" placeholder="Nombre de Usuario" />
            <input type="password" placeholder="Contraseña" />
          </form>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default Registro;
