import React from 'react'
import ItemCount from "../ItemCount/ItemCount";
// import { getFetch } from "../helpers/getFetch";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { ItemDetailContainer } from "../ItemDetailContainer/ItemDetailContainer";

const ItemDetail = ({ producto }) => {
  console.log(producto);
  const onAdd = (cant) => {
    console.log(`La cantidad es:  ${cant}`);
  };

  return (
    <div>
      ItemDetail
      <div className="card mb-3" >
        <div className="row g-0">
          <div className="col-md-4">
            <img src={producto.imagePath } className="img-fluid rounded-start" alt={'hola' } />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
      <ItemCount initial={1} stock={5} onAdd={onAdd} />
    </div>
  );
}

export default ItemDetail