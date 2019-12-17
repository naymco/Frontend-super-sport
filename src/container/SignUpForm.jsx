import React from "react";

export const SignUpForm = ({
  onChange,
  onSubmit,
  user: { email, nombre, direccion, password }
}) => (
  <form className="form" onSubmit={onSubmit}>
    <label htmlFor="email">Email</label>
    <input
      type="text"
      id="email"
      name="email"
      value={email}
      onChange={onChange}
    />
    <label htmlFor="nombre">Nombre</label>
    <input
      type="text"
      id="nombre"
      name="nombre"
      value={nombre}
      onChange={onChange}
    />
    <label htmlFor="direccion">Dirección</label>
    <input
      type="text"
      id="direccion"
      name="direccion"
      value={direccion}
      onChange={onChange}
    />
    <label htmlFor="password">Contraseña</label>
    <input
      type="password"
      name="password"
      id="password"
      value={password}
      onChange={onChange}
    />
    <input type="submit" value="Registrar" />
  </form>
);

export default SignUpForm;
