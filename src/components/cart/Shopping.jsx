import React, { Component, Fragment } from "react";
import Products from "./Products";
import axios from "axios";

//import Filter from "./Filter";
import ShoppingCart from "./Shopping-cart";
import Header from "../Header";
import Footer from "../Footer";

// import Css
import "../../assets/css/Shopping.css";

class Shopping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: "",
      cartItems: [],
      products: [],
      filteredProducts: []
    };
  }
  componentDidMount() {
    if (localStorage.getItem("cartItems")) {
      this.setState({
        cartItems: JSON.parse(localStorage.getItem("cartItems"))
      });
    }
    axios
      .get("http://localhost:3001/products")
      .then(item => {
        const data = item.data;
        this.setState({ products: data });
        //this.listProducts();
      })
      .catch(error => console.log(error));
  }

  handleRemoveFromCart = (event, product) => {
    this.setState(state => {
      const cartItems = state.cartItems.filter(a => a.id !== product.id);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return { cartItems: cartItems };
    });
  };

  handleAddToCart = (event, product) => {
    this.setState(state => {
      const cartItems = state.cartItems;
      let productAlreadyInCart = false;

      cartItems.forEach(cp => {
        if (cp.id === product.id) {
          cp.count += 1;
          productAlreadyInCart = true;
        }
      });
      if (!productAlreadyInCart) {
        cartItems.push({ ...product, count: 1 });
      }
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return { cartItems: cartItems };
    });
  };

  //   listProducts = () => {
  //     this.setState(state => {
  //       if (state.sort !== "") {
  //         state.products.sort((a, b) =>
  //           state.sort === "lowestprice"
  //             ? a.precio > b.precio
  //               ? 1
  //               : -1
  //             : a.precio < b.precio
  //             ? 1
  //             : -1
  //         );
  //       } else {
  //         state.products.sort((a, b) => (a.id > b.id ? 1 : -1));
  //       }
  //       return { filteredProducts: state.products };
  //     });
  //   };

  //   handleSortChange = event => {
  //     this.setState({ sort: event.target.value });
  //     //this.listProducts();
  //   };
  render() {
    return (
      <Fragment>
        <Header />
        <div className="container-cart">
          <h1>Tu cesta</h1>
          <hr />
          <div className="fila">
            <div className="columna">
              {/* <Filter
              count={this.state.filteredProducts.length}
              handleSortChange={this.handleSortChange}
            />
            <hr /> */}
              <Products
                products={this.state.filteredProducts}
                handleAddToCart={this.handleAddToCart}
              />
            </div>
            <div className="columna">
              <ShoppingCart
                cartItems={this.state.cartItems}
                handleRemoveFromCart={this.handleRemoveFromCart}
              />
            </div>
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default Shopping;
