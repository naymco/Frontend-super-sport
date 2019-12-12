import axios from "axios";

const authRepository = () => {
  //let debug = true;

  let urlBack = "http://localhost:3001/auth";
  //let urlUser = "http://localhost:3001/auth/perfil";

  const tokenName = "token";

  // const getLocalToken = () => {
  //   return JSON.parse(localStorage.getItem(tokenName));
  // };

  const login = user => {
    return new Promise((resol, rej) => {
      const instance = axios.create({
        baseURL: urlBack,
        headers: {
          "Content-Type": "application/json"
        }
      });

      instance
        .post("login/", user)
        .then(res => {
          localStorage.setItem(tokenName, JSON.stringify(res.data.token));
          resol(res.data);
          console.log(res.data.token);
        })
        .catch(error => {
          console.log(error);
          rej(error.response);
        });
    });
  };

  const signUp = user => {
    return new Promise((resol, rej) => {
      const instance = axios.create({
        baseURL: urlBack,
        headers: {
          "Content-Type": "application/json"
          //Authorization: "Token " + getLocalToken()
        }
      });
      instance
        .post("register/", user)
        .then(res => {
          localStorage.setItem(tokenName, JSON.stringify(res.data.key));
          resol(res.data);
        })
        .catch(error => {
          console.log(error);
          rej(error.response);
        });
    });
  };

  const logout = () => {
    return new Promise((resol, rej) => {
      const instance = axios.create({
        baseURL: urlBack,
        headers: {
          "Content-Type": "application/json"
          // Authorization: "Token " + getLocalToken()
        }
      });
      instance
        .post("logout/", {})
        .then(res => {
          localStorage.removeItem(tokenName);
          resol(res.data);
        })
        .catch(error => {
          console.log(error);
          rej(error.response);
        });
    });
  };
  return {
    login,
    signUp,
    logout
  };
};

export default authRepository();
