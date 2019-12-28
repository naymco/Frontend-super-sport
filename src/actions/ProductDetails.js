import store from "../store";

export const setProductDetails = item => {
  store.dispatch({ type: "SET_PRODUCT_DETAILS", payload: item });
};
