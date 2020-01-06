import axios from "axios";

const productStorage = JSON.parse(
  localStorage.getItem("redux_localstorage_simple")
);
const user = JSON.parse(localStorage.getItem("users"));
console.log(productStorage);

const cartRepository = () => {
  const urlBack = "http://localhost:3001/orders";
  const addOrder = cart => {
    console.log(cart);
    return new Promise((resol, rej) => {
      const instance = axios.create({
        baseURL: urlBack,
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log(cart);
      // let cartArray = [];
      // localStorage.setItem("pedido", JSON.stringify(cart));
      // let cartStorage = JSON.parse(localStorage.getItem("pedido"));
      // cartArray.push(cartStorage);
      // console.log(cartArray);
      instance
        .post("order/", cart)
        .then(res => {
          console.log(res);
          resol(res.data.cart);
        })
        .catch(error => {
          console.log(error);
          rej(error.response);
        });
    });
  };
  const getOrderProducts = order => {
    const orderStorage = [];
    return new Promise((resol, rej) => {
      const instance = axios.create({
        baseURL: urlBack,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Order: " + productStorage
        }
      });
      instance
        .get("/pedido/" + order.id, order)
        .then(res => {
          const userId = JSON.parse(localStorage.getItem("users"));
          console.log(userId);
          localStorage.setItem(orderStorage, JSON.stringify(res.data));
        })
        .catch();
    });
  };

  return {
    addOrder,
    getOrderProducts
  };
};

export default cartRepository();
