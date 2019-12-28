import { createStore, compose, applyMiddleware } from "redux";
import reducer from "./reducers";
import { save, load } from "redux-localstorage-simple";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //cargamos las developer tools de redux
const createStoreWithMiddleware = applyMiddleware(save())(createStore);

const store = createStoreWithMiddleware(
  reducer,
  load({
    preloadedState: {
      //cargamos un estado inicial para redux en caso de no haber estado en el localStorage
      details: []
    }
  }), // Loading done here
  composeEnhancers()
);

export default store;
