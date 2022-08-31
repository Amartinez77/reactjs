import React from "react";
import { Container } from "react-bootstrap";
import ButttonSeguirCompra from "../ButttonSeguirCompra/ButttonSeguirCompra";
import "../Cart/cartEmpty.css";

/* A function that returns a component. */
const CartEmpty = ({ order }) => {
  return (
    <>

      <Container>
        {order ? (
          <div className="container">
            <div className="container containerTicket mt-4">
            <h3>Recuerde conservar su nro de compra</h3>
            <h3><mark>{order}</mark></h3>
            <h3>gracias por su compra!</h3>
            <ButttonSeguirCompra />
            </div>
          </div>
        ) : (
            <div className="container">
              <h3>Ups! no hay nada por aqui!</h3>
            <ButttonSeguirCompra />
            </div>
        )}
      </Container>
    </>
  );
};

export default CartEmpty;
