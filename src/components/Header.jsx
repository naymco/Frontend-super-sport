import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Header.css";
import axios from "axios";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categorias: [],
      userRemove: ""
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:3001/categories/categorias`)
      .then(items => {
        const categorias = items.data;
        this.setState({ categorias });
        // console.log(items.data)
      })
      .catch(error => console.log(error));
  }
  logout = event => {
    event.preventDefault();
    return this.setState({ userRemove: localStorage.removeItem("token") });
  };

  render() {
    const token = JSON.parse(localStorage.getItem("token"));
    const user = JSON.parse(localStorage.getItem("users"));
    const cartItems = JSON.parse(localStorage.getItem("cartItems"));

    if (token)
      return (
        <div>
          <nav className="navbar">
            <ul className="menu">
              <li>
                <Link to="/" className="Link">
                  Home
                </Link>
              </li>
              <li>Contact</li>
              <div className="regLogin">
                <li>
                  <Link to="/orders" className="Link">
                    Cesta [{cartItems.length}]
                  </Link>
                </li>

                <li>
                  <Link to={`/auth/${user.username}`} className="Link">
                    <span>Bienvenido, {user.username}</span>
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={this.logout} className="Link">
                    <span>Logout</span>
                  </Link>
                </li>
              </div>
            </ul>
          </nav>
        </div>
      );
    else
      return (
        <div>
          <nav className="navbar">
            <ul className="menu">
              <li>
                <Link to="/" className="Link">
                  Home
                </Link>
              </li>
              <li>Contacto</li>
              <li>
                <div>
                  {this.state.categorias?.map(item => {
                    return (
                      <div key={item.id}>
                        <select name="Categorias" className="Link">
                          <option value={item.nombre} selected></option>
                        </select>
                      </div>
                    );
                  })}
                </div>
              </li>
              <div className="regLogin">
                <li>
                  <Link to="/auth/register" className="Link">
                    <span>Regístrate</span>
                  </Link>
                </li>
                <li>
                  <Link to="/auth/login" className="Link">
                    <span>Iniciar Sesión</span>
                  </Link>
                </li>
              </div>
            </ul>
          </nav>
          <header></header>
        </div>
      );
  }
}

export default Header;
