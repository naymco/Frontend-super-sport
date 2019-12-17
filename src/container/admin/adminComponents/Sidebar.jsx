import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "../css/Sidebar.css";

class Sidebar extends Component {
  render() {
    return (
      <Fragment>
        <aside className="sidebar">
          <h3> Gestor de inventario</h3>
          <ul>
            <li>Buscar</li>
            <li>Agregar</li>
            <li>
              <Link to="/productos">Modificar</Link>
            </li>
            <li>Borrar</li>
          </ul>
        </aside>
      </Fragment>
    );
  }
}

export default Sidebar;
