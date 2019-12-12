import React, { Component, Fragment } from "react";
import { SignUpForm } from "./SignUpForm.jsx";
import AuthApi from "./authRepository";
import "../assets/css/SignUp.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: "",
        email: "",
        nombre: "",
        direccion: "",
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
    AuthApi.signUp(user)
      .then(res => {
        alert("Usuario creado");
      })
      .catch(error => {
        console.log(error);
        alert("Ocurrió un error");
      });
  };

  render() {
    return (
      <Fragment>
        <Header />
        <div className="contenedor">
          <h1 className="title">Regístrate</h1>
          <SignUpForm
            user={this.state.user}
            onChange={this.onChange}
            onSubmit={this.onSubmit}
          />
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default SignUpPage;
