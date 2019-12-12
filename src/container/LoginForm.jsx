import React from "react";

export const LoginForm = ({
  onChange,
  onSubmit,
  user: { email, password }
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
    <label htmlFor="password">Contraseña</label>
    <input
      type="password"
      name="password"
      id="password"
      value={password}
      onChange={onChange}
    />
    <input type="submit" value="Inicia Sesión" id="button" />
  </form>
);
