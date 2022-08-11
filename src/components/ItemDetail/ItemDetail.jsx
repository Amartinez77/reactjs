import React, { useState } from "react";
import { useCartContext } from "../../Context/CartContext";


import ButtonComprar from "../ButtonComprar/ButtonComprar";
import ItemCount from "../ItemCount/ItemCount";



const ItemDetail = ({ producto }) => {

  const { agregarCarrito } = useCartContext()


  // estado para el count
  const [cart, setCart] = useState(true);

  // console.log(producto);
  const onAdd = (cant) => {
    // console.log(`La cantidad es:  ${cant}`);
    agregarCarrito({ ...producto, cantidad: cant })
    setCart(false);
  };

  // console.log(setCartList);

  return (
    <div className="container">
      ItemDetail
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={producto.imagePath}
              className="img-fluid rounded-start"
              alt={"hola"}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{producto.brand}</h5>
              <p className="card-text">{producto.description}</p>
              <p className="card-text">{`$ ${producto.price}`}</p>
              <div className="Container">
                {cart ? (
                  <ItemCount initial={1} stock={5} onAdd={onAdd} />
                ) : (
                  <ButtonComprar />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
