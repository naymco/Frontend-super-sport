import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <input type="submit" value="Enviar" />
      </div>
    );
  }
}

export default Login;
