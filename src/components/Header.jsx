import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Header.css";
import axios from "axios";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      categorias: []
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
