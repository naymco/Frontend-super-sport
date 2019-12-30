import store from "../store";
import axios from "axios";

export const setConnectAxios = item => {
  console.log(item);
  axios
    .get(`http://localhost:3001/products`)
    .then(items => {
      const productos = items.data;
      this.setState({ productos });
    })
    .catch(error => console.log(error));

  store.dispatch({
    type: "AXIOS_CONNECT",
    payload: item
  });
};
