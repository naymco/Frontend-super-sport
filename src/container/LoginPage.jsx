import React, { Component, Fragment } from "react";

import { LoginForm } from "./LoginForm";
import AuthApi from "./authRepository";
import Header from "../components/Header";

import "../assets/css/SignUp.css";
import { Redirect } from "react-router-dom";

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
        // alert("Usuario logueado correctamente");
        this.setState({
          redirect: true
        });
      })
      .catch(error => {
        alert("Algo salio mal");
        console.log(error);
      });
  };

  render() {
    const userValid = localStorage.getItem("users");
    if (userValid && this.state.redirect === true) {
      console.log(userValid.email);
      const user = JSON.parse(localStorage.getItem("users"));
      console.log(user.username);
      return (
        <div>
          <h1> Bienvenido {user.username} </h1>
          <p> {user.direccion} </p>
        </div>
      );
    } else {
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
}

export default LoginPage;
