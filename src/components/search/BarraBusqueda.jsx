import React, { Fragment } from "react";

export const BarraBusqueda = ({ onChange, onSubmit, search: { nombre } }) => (
  <Fragment>
    <form className="search-form" onSubmit={onSubmit}>
      <input
        type="text"
        id="nombre"
        name="nombre"
        value={nombre}
        onChange={onChange}
        placeholder="Buscar..."
      />
    </form>
  </Fragment>
);
