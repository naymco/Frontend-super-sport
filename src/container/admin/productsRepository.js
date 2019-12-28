import axios from "axios";

const tokenName = "token";

const getLocalToken = () => {
  return JSON.parse(localStorage.getItem(tokenName));
};

const productsRepository = () => {
  let urlBack = "http://localhost:3001/products";

  const newProduct = product => {
    return new Promise((resol, rej) => {
      const instance = axios.create({
        baseURL: urlBack,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Token " + getLocalToken()
        }
      });

      instance
        .post("/nuevoProducto", product)
        .then(res => {
          resol(res.data);
        })
        .catch(error => {
          console.log(error);
          rej(error.response);
        });
    });
  };

  const getProduct = product => {
    return new Promise((resol, rej) => {
      const instance = axios.create({
        baseURL: urlBack,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Token " + getLocalToken()
        }
      });
      instance
        .get("/products", product)
        .then(res => resol(res.data))
        .catch(error => {
          console.log(error);
          rej(error.response);
        });
    });
  };
  const updateProduct = product => {
    return new Promise((resol, rej) => {
      const instance = axios.create({
        baseURL: urlBack,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Token " + getLocalToken()
        }
      });

      instance.patch(product.id + "/", product).then(res =>
        resol(res.data).catch(error => {
          console.log(error);
          rej(error.response);
        })
      );
    });
  };

  const deleteProduct = idProduct => {
    return new Promise((resol, rej) => {
      const instance = axios.create({
        baseURL: urlBack,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Token " + getLocalToken()
        }
      });
      instance
        .delete(idProduct + "/")
        .then(res => resol(res.data))
        .catch(error => {
          console.log(error);
          rej(error.response);
        });
    });
  };

  return {
    newProduct,
    getProduct,
    updateProduct,
    deleteProduct
  };
};

export default productsRepository();
