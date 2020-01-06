import React, { Component } from "react";
import axios from "axios";
import Header from "../Header";

import "../../assets/css/Profile.css";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      userStore: []
    };
  }

  componentDidMount() {
    const user_name = JSON.parse(localStorage.getItem("users"));
    axios
      .get(`http://localhost:3001/auth/${user_name.username}`, {
        headers: {
          Accept: "application/json",
          Authorization: `${localStorage.getItem("token")}`
        }
      })
      .then(user => {
        console.log(user.data);
        localStorage.setItem("username", this.state.userStore.user);
        this.setState({ userStore: user.data, redirect: true });
      })
      .catch();
  }
  render() {
    const user = this.state.userStore;
    const token = JSON.parse(localStorage.getItem("token"));
    console.log(user);
    if (token)
      return (
        <div className="profile" {...this.state.userStore}>
          <Header />
          <h3>Profile</h3>
          <div className="profile-detalles">
            <h2>Hola de nuevo, {user.nombre} </h2>
            <div className="direccion">
              <h4> Detalles de tu perfil:</h4>
              <p>Email: {user.email} </p>
              <p>Direccion: {user.direccion} </p>
              <p>Ciudad: {user.ciudad} </p>
            </div>
            <div className="pedidos">
              <h4>Pedidos: </h4>
              <p>productos pedidos: </p>
            </div>
          </div>
        </div>
      );
    else
      return (
        <div {...this.state.userStore}>
          <Header />

          <h2>Necesitas estar logueado para ver tu perfil</h2>
          <h2>Necesitas estar logueado para ver tu perfil</h2>
          <h2>Necesitas estar logueado para ver tu perfil</h2>
        </div>
      );
  }
}

export default Profile;
