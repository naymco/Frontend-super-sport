import axios from "axios";

const searchRepository = () => {
  let urlSearch = "http://localhost:3001/products";

  const searchStore = "search";

  const getSearch = search => {
    return new Promise((resol, rej) => {
      const instance = axios.create({ baseURL: urlSearch });
      instance
        .get("nombre/" + search.nombre, search)
        .then(res => {
          localStorage.setItem(searchStore, JSON.stringify(res.data));
          resol(res.data);
        })
        .catch(error => {
          console.log(error);
          rej(error.response);
        });
    });
  };
  return { getSearch };
};

export default searchRepository();
