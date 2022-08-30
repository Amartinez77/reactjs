import React, { useState } from "react";
import { useCartContext } from "../../Context/CartContext";

import ButtonComprar from "../ButtonComprar/ButtonComprar";
import ItemCount from "../ItemCount/ItemCount";
import "../ItemDetail/ItemDetail.css";

const ItemDetail = ({ product }) => {
  const { addCart } = useCartContext();

  // estado for count
  const [cart, setCart] = useState(true);

  const onAdd = (cant) => {
    addCart({ ...product, cantidad: cant });
    setCart(false);
  };
  
  return (
    <div className="container">
      <div className="card mb-3 shad">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={product.imagePath}
              className="img-fluid rounded-start w-100"
              alt={"hola"}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-center">{product.brand}</h5>
              <p className="card-text text-center">{product.description}</p>
              <p className="card-text">{`$ ${product.price}`}</p>
              {cart ? (
                <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
              ) : (
                <ButtonComprar />
              )}
              <div className="Container"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
