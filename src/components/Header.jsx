import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Header.css";

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <ul className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Productos</Link>
            </li>
            <li>Contacto</li>
            <div className="regLogin">
              <li>
                <span>Regístrate</span>{" "}
              </li>
              <li>
                <span>Iniciar Sesión</span>{" "}
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
