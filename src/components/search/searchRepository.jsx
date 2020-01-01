import axios from "axios";

const searchRepository = () => {
  let urlSearch = "http://localhost:3001/products";

  // const nombre = event => {
  //   return event.target.value;
  // };

  const getSearch = search => {
    console.log(search);
    return new Promise((resol, rej) => {
      const instance = axios.create({ baseURL: urlSearch });
      instance
        .get("nombre/" + search.nombre, search)
        .then(res => {
          resol(res.data);
          console.log(res.data);
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
