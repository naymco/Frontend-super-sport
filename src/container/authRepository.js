import axios from "axios";

const authRepository = () => {
  //let debug = true;

  let urlBack = "http://localhost:3001/auth";

  const tokenName = "token";
  const userStore = "users";

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
          console.log(user);
          localStorage.setItem(tokenName, JSON.stringify(res.data.token));
          localStorage.setItem(userStore, JSON.stringify(res.data.user));
          resol(res.data);
          console.log(res.data.user);
        })
        .catch(error => {
          console.log(error);
          rej(error.response);
        });
    });
  };

  const signUp = user => {
    const profileStore = "profile";
    return new Promise((resol, rej) => {
      const instance = axios.create({
        baseURL: urlBack,
        headers: {
          "Content-Type": "application/json"
        }
      });
      instance
        .post("register/", user)
        .then(res => {
          localStorage.setItem(profileStore, JSON.stringify(res.data.user));
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
