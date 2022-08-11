import React from 'react'
import { Link } from "react-router-dom";


const Item = ({ prod }) => {
  return (
    <div
      className="col-md-4 p-1"
      //key={prod.id}
    >
      <div className="card w-100 mt-5">
        <div className="card-header">{`${prod.brand} - ${prod.category}`}</div>
        <div className="card-body">
          <img src={prod.imagePath} alt="" className="w-50" />
          
        </div>
        <div className="card-footer">
          <h3>descripcion: {`${prod.description}`}</h3>
          <h3>{`  stock: ${prod.stock}`} </h3>

          <h4>{`$ ${prod.price}`}</h4>
          <Link to={`/detalle/${prod.id}`}>
            <button className="btn btn-outline-primary btn-block">
              detalle del producto
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;