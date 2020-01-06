import React from "react";

export const ProductForm = ({
  onChange,
  onSubmit,
  onSubmitReset,

  products: {
    nombre,
    descripcion,
    stock,
    precio,
    nombreCategoria,
    img_url,
    img_url_detalle1,
    img_url_detalle2
  }
}) => (
  <form className="adminForm" onSubmit={onSubmit}>
    <label htmlFor="nombre">Nombre</label>
    <input
      type="text"
      id="nombre"
      name="nombre"
      value={nombre}
      onChange={onChange}
    />
    <label htmlFor="descripcion">Descipción</label>
    <input
      type="text"
      id="descripcion"
      name="descripcion"
      value={descripcion}
      onChange={onChange}
    />
    <label htmlFor="stock">Stock</label>
    <input
      type="text"
      id="stock"
      name="stock"
      value={stock}
      onChange={onChange}
    />
    <label htmlFor="precio">Precio</label>
    <input
      type="text"
      id="precio"
      name="precio"
      value={precio}
      onChange={onChange}
    />
    <label htmlFor="nombreCategoria">Nombre de categoría</label>
    <input
      type="text"
      id="nombreCategoria"
      name="nombreCategoria"
      value={nombreCategoria}
      onChange={onChange}
    />
    <label htmlFor="img_url">Url de la imagen</label>
    <input
      type="text"
      id="img_url"
      name="img_url"
      value={img_url}
      onChange={onChange}
    />
    <label htmlFor="img_url_detalle1">Url de la imagen detalle 1</label>
    <input
      type="text"
      id="img_url_detalle1_"
      name="img_url_detalle1"
      value={img_url_detalle1}
      onChange={onChange}
    />
    <label htmlFor="img_url_detalle2">Url de la imagen detalle 2</label>
    <input
      type="text"
      id="img_url_detalle2"
      name="img_url_detalle2"
      value={img_url_detalle2}
      onChange={onChange}
    />
    <div className="botones">
      <input id="agregar" type="submit" value="Agregar" />
      <button className="buttons" type="reset" onClick={onSubmitReset}>
        Reset
      </button>
    </div>
    <div className="listado"></div>

    {/* <input
      id="modificar"
      type="submit"
      value="Modificar"
      onSubmit={onSubmitEdit}
    />
    <input id="borrar" type="submit" value="Borrar" onSubmit={onSubmitDelete} /> */}
  </form>
);

export default ProductForm;
