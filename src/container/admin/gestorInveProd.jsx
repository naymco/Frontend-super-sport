import React, { Component, Fragment } from "react";
import ProductApi from "./productsRepository";
import { ProductForm } from "./productsForm";
import axios from "axios";

import "./css/gestorInvProd.css";
import Sidebar from "./adminComponents/Sidebar";

class gestorInvProd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: {
        nombre: "",
        descripcion: "",
        stock: "",
        precio: "",
        nombreCategoria: "",
        img_url: "",
        img_url_detalle1: "",
        img_url_detalle2: ""
      },
      productos: []
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:3001/products/`)
      .then(items => {
        const productos = items.data;
        console.log(productos);
        this.setState({ productos });
      })
      .catch(error => console.log(error));
  }

  onChange = event => {
    let products = Object.assign({}, this.state.products);
    products[event.target.name] = event.target.value;
    this.setState({ products });
  };

  // getAllProducts = event => {
  //   const products = Object.assign({}, this.state.products);
  //   ProductApi.getProduct(products).then(res => {
  //     console.log(res);
  //   });
  // };

  onSubmit = event => {
    event.preventDefault();
    const products = Object.assign({}, this.state.products);
    console.log(products);
    ProductApi.newProduct(products)
      .then(res => {
        console.log(res);
        alert("Producto creado correctamente");
        this.setState({ products: [...this.state.productos, res.productos] });
      })
      .catch(error => {
        console.error(error);
        alert("Ocurrio un error, estás jodido");
      });
  };

  onSubmitEdit = event => {
    event.preventDefault();
    const products = Object.assign({}, this.state.products);
    ProductApi.updateProduct(products)
      .then(res => {
        alert("Producto modificado");
      })
      .catch(error => {
        console.error(error);
        alert("Ocurrió un error chungo");
      });
  };

  onSubmitDelete = event => {
    const products = Object.assign({}, this.state.products);
    ProductApi.deleteProduct(products)
      .then(res => {
        alert("Producto borrado");
      })
      .catch(error => {
        console.error(error);
        alert("Producto borrado correctamente");
      })
      .catch(error => {
        console.error("No se pudo borrar melón");
      });
  };

  onSubmitReset = event => {
    event.preventDefault();
    console.log(event);
    this.setState({
      products: {
        nombre: "",
        descripcion: "",
        stock: "",
        precio: "",
        nombreCategoria: "",
        img_url: "",
        img_url_detalle1: "",
        img_url_detalle2: ""
      }
    });
  };

  render() {
    return (
      <Fragment>
        {/* <Header /> */}
        <div className="adminContent">
          <Sidebar />
          <div className="adminPanel">
            <h1 className="titleAdmin"> Agregar Productos</h1>
            <div className="inputs">
              <ProductForm
                products={this.state.products}
                onChange={this.onChange}
                onSubmit={this.onSubmit}
                onSubmitEdit={this.onSubmitEdit}
                onSubmitDelete={this.onSubmitDelete}
                onSubmitReset={this.onSubmitReset}
              />

              <div className="adminContainer">
                {this.state.productos.map(item => {
                  return (
                    <button>
                      <div key={item.id} className="adminList">
                        <div className="adminProducto">
                          <p>{item.nombre}</p>
                          <p className="adminPrecio"> {item.precio}€ </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default gestorInvProd;
