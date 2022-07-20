import React from 'react'


const Item = ({ prod }) => {
  return (
    <div
      className="col-md-4 p-1"
      //key={prod.id}
    >
      <div className="card w-100 mt-5">
        <div className="card-header">{`${prod.marca} - ${prod.categoria}`}</div>
        <div className="card-body">
          <img src={prod.imagePath} alt="" className="w-50" />
          {prod.stock}
        </div>
        <div className="card-footer">
          <h3>descripcion: {`${prod.descripcion}`}</h3>
          <h4>{ `$ ${prod.precio}` }</h4>
          <button className="btn btn-outline-primary btn-block">
            detalle del producto
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;