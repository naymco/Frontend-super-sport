import React, { Fragment } from "react";

export const Cart = ({ onChange, onSubmit }) => (
  <Fragment>
    <form onSubmit={onSubmit}>
      <input type="submit" value="Seguir comprando" />
      <input
        type="submit"
        id="cart"
        className="cart"
        name="cart"
        
        onChange={onChange}
      />
    </form>
  </Fragment>
);
