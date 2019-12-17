import React, { Component, Fragment } from "react";

import { LoginForm } from "./LoginForm";
import AuthApi from "./authRepository";
import Header from "../components/Header";


import "../assets/css/SignUp.css";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: "",
        email: "",
        password: ""
      }
    };
  }

  onChange = event => {
    let user = Object.assign({}, this.state.user);
    user[event.target.name] = event.target.value;
    this.setState({ user });
  };

  onSubmit = event => {
    event.preventDefault();
    const user = Object.assign({}, this.state.user);
    user.username = user.email;
    AuthApi.login(user)
      .then(res => {
        alert("Usuario logueado correctamente");
      })
      .catch(error => {
        alert("Algo salio mal");
      });
  };

  render() {
    return (
      <Fragment>
        <Header />
        <div className="contenedor">
          <h1 className="title">Iniciar sesión</h1>
          <LoginForm
            user={this.state.user}
            onChange={this.onChange}
            onSubmit={this.onSubmit}
          />
        </div>
      </Fragment>
    );
  }
}

export default LoginPage;
