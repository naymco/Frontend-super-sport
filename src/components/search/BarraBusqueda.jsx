import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export const BarraBusqueda = ({ onChange, onSubmit, search: { nombre } }) => (
  <Fragment>
    <form className="search-form" onSubmit={onSubmit}>
      <input
        type="text"
        id="nombre"
        name="nombre"
        value={nombre}
        onChange={onChange}
      />

      

      {/* <button className="btn-search" id="btn-search-id" >
        Seach
      </button> */}
    </form>
  </Fragment>
);

// class BarraBusqueda extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       titulo: "",
//       producto: []
//     };
//   }

//   componentDidMount() {
//     axios
//       .get(`http://localhost:3001/products/productos`)
//       .then(items => {
//         this.setState({ producto: items.data });
//       })
//       .catch(error => console.log(error));
//   }

//   onInputChange(event) {
//     let busqueda = event.target.value;
//     const data = this.state.producto;
//     // console.log(data);
//     const newData = data.filter(item => {
//       const itemData = item.nombre;
//       const inputData = busqueda;
//       // console.log(inputData);
//       const busquedaFinal = itemData.indexOf(inputData) > -1;
//       if (busquedaFinal === true) return busquedaFinal;
//       console.log(inputData);
//       // return busquedaFinal;
//     });

//     this.setState({
//       producto: newData,
//       titulo: busqueda
//     });
//   }

//   render() {
//     return (
//       <div className="buscador">
//         <form>
//           <input
//             type="text"
//             placeholder="Buscar"
//             value={this.state.titulo}
//             onChange={text => this.onInputChange(text)}
//           />
//           <div>
//             {this.yepa()}
//             {/* {this.state.producto?.map(item => {
//               return item.precio
//              })} */}
//           </div>

//           {/* {this.state.producto} */}
//         </form>
//       </div>
//     );
//   }
// }

// export default {
//   BarraBusqueda,
//   onInputChange
// };
