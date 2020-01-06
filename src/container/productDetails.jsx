import React, { Component } from "react";
import { connect } from "react-redux";

// import header, footer and slider
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Slide } from "react-slideshow-image";

// import css from assets
import "../assets/css/ProductDetails.css";

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: "",
      cartItems: [],
      products: [],
      filteredProducts: [],
      properties: {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        arrows: true,
        onChange: (oldIndex, newIndex) => {
          //console.log(oldIndex)
        }
      }
    };
  }
  componentDidMount() {
    //   axios.get( "http://localhost:3001/products")
    // }
    if (localStorage.getItem("cartItems")) {
      this.setState({
        cartItems: JSON.parse(localStorage.getItem("cartItems"))
      });
    }
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

  handleSortChange = event => {
    this.setState({ sort: event.target.value });
  };

  renderProductDetails = item => {
    return (
      <div key={item.id} className="detalles-producto" id="body-producto">
        <div className="imagen-titulo">
          <Slide className="slide-img" {...this.state.properties}>
            <img src={item.img_url} alt={item.nombre} />
            <img src={item.img_url_detalle1} alt={item.nombre} />
            <img src={item.img_url_detalle2} alt={item.nombre} />
          </Slide>
        </div>
        <div className="detalles">
          <h4> Detalle del producto </h4>
          <h2>{item.nombre}</h2>
          <p>Descripción: {item.descripcion} </p>
          <p>Stock: {item.stock} </p>
          <p className="precio">Precio: {item.precio}€ </p>
          <p>Categoría: {item.nombreCategoria} </p>
          {/* <CartPage /> */}
          <button
            className="btn-add-cart"
            onClick={event => this.handleAddToCart(event, item)}
          >
            Agregar a la cesta
          </button>
          {/* <button
            style={{ float: "right " }}
            className="btn-delete"
            onClick={event => this.handleRemoveFromCart(event, item)}
          >
            Borrar de la cesta
          </button> */}

          {/* <button className="añadirCarrito" onClick={ event => Cart.onChange }>Añadir al carrito</button> */}
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        <Header />
        {this.props.productDetails &&
          this.renderProductDetails(this.props.productDetails)}

        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    productDetails: state.productDetails
  };
}

export default connect(mapStateToProps)(ProductDetails);
