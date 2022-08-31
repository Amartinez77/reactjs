import React from "react";
import { useCartContext } from "../../Context/CartContext";
import ButttonSeguirCompra from "../ButttonSeguirCompra/ButttonSeguirCompra";
import CartEmpty from "./CartEmpty";
import CartForm from "./CartForm";
import { useSendOrderFirebase } from "../../Hooks/useSendOrderFirebase";

import "../Cart/cart.css";

const Cart = () => {
  const { cartList, emptyCart, removeUnit, totalPrice } = useCartContext();


  const { sendOrder, id } = useSendOrderFirebase(
    cartList,
    totalPrice,
    emptyCart
  );




  return (
    (cartList.length > 0 && (
      <div className="container">
        <h2 className="text-start">Mi carrito</h2>
        <div className="row mt-5">
          {id.length > 0 ? (
            <>
              <h2>El id de la orden es: {id}</h2>
              <h3>gracias por su compra</h3>
            </>
          ) : (
            <div className="col listProd">
              <div className="container ">
                <ul>
                  {cartList.map((item) => (
                    <li
                      key={item.id}
                      className="list-group-item list-group-item-action d-flex gap-3 py-3 mb-3 itemList"
                      aria-current="true">
                      <img
                        src={item.imagePath}
                        alt="twbs"
                        width="100"
                        height="100"
                        className="rounded-circle flex-shrink-0"
                      />
                      <div className="d-flex gap-2 w-100 justify-content-between">
                        <div>
                          <h6 className="mb-0">{item.brand}</h6>
                          <p className="mb-0 opacity-75">
                            cantidad {item.cantidad}
                          </p>
                          <p className="mb-0 opacity-75">
                            {item.cantidad * item.price}
                          </p>
                        </div>
                        <button
                          className="btn btn-danger btn-class"
                          onClick={() => {
                            removeUnit(item.id);
                          }}>
                          {" "}
                          X{" "}
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          <CartForm sendOrder={sendOrder} />
          <div>
            <h4>
              total: <span>{totalPrice()}</span>
            </h4>
          </div>
          <div>
            <button className="btn btn-danger" onClick={emptyCart}>
              Vaciar carrito
            </button>

            <br />
            <ButttonSeguirCompra />
            <br />
          </div>
        </div>
      </div>
    )) || <CartEmpty order={id} />
  );
};

export default Cart;
