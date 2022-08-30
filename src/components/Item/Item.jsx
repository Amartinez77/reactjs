import React from "react";
import { Link } from "react-router-dom";
import "../Item/Item.css";
import StockControl from "../helpers/StockControl.jsx";

const Item = ({ prod }) => {
  return (
    <div className="col colCard mb-3">
      <div className="card w-100 h-100 mt-3">
        <div className="card-header">{`${prod.brand} - ${prod.category}`}</div>
        <div className="card-body overflow">
          <img src={prod.imagePath} alt="" className="card-img-top" />
        </div>
        <div className="card-footer">
          <StockControl stock={prod.stock} />

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
