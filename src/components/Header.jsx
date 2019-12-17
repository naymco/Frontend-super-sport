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
              <Link to="/" className="Link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/productos" className="Link">
                Productos
              </Link>
            </li>
            <li>Contacto</li>
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
