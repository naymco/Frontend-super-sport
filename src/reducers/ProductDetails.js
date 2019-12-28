// import { PRODUCT_DETAILS } from "../actions/ProductDetails";

const initialState = {};

export function productDetails(state = initialState, action) {
  switch (action.type) {
 
    case "SET_PRODUCT_DETAILS":
      return action.payload;
    default:
      return state;
  }
}

export default productDetails;
