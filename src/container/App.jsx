import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Slider from "../components/Slider.jsx";
//import Login from "../components/Login.jsx";

import Home from "../pages/Home";
import Products from "../pages/Products";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { productos: [] };
  }
  componentDidMount() {
    axios
      .get(`http://localhost:3001/productos`)
      .then(items => {
        const productos = items.data;

        this.setState({ productos });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <Slider />
          <div>
            {" "}
            {this.state.productos.map(item => (
              <Home key={item.id} data={item} />
            ))}
          </div>
          <div className="container">
            <Route exact path="/" component={Home} />
            <Route path="/products" component={Products} />
          </div>

          <Footer />
        </Fragment>
      </Router>
    );
  }
}

export default App;
