import React, { Component, Fragment } from "react";
import ProductApi from "./productsRepository";
import { modificarForm } from "./modificarForm";

import Sidebar from "./adminComponents/Sidebar";

class ModicarPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: {
        nombre: "",
        descripcion: "",
        stock: "",
        precio: "",
        nombreCategoria: "",
        img_url: ""
      }
    };
  }

  onChange = event => {
    let products = Object.assign({}, this.state.products);
    products[event.target.name] = event.target.value;
    this.setState({ products });
  };

  onSubmit = event => {
    event.preventDefault();
    const products = Object.assign({}, this.state.products);
    console.log(products);
    ProductApi.newProduct(products)
      .then(res => {
        alert("Producto creado correctamente");
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
        img_url: ""
      }
    });
  };

  render() {
    return (
      <Fragment>
        
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
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ModicarPage;
