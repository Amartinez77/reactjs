import React from "react";
import { Container } from "react-bootstrap";

import ButttonSeguirCompra from "../ButttonSeguirCompra/ButttonSeguirCompra";

/* A function that returns a component. */
const CartEmpty = ({ order }) => {
  return (
    <>
      {console.log(order)}
      <Container>
        {order ? (
          <div>
            <h3>Recuerde conservar su nro de compra</h3>
            <h3>nro: {order}</h3>
            <h3>gracias por su compra!</h3>
            <ButttonSeguirCompra />
          </div>
        ) : (
          <ButttonSeguirCompra />
        )}
      </Container>
    </>
  );
};

export default CartEmpty;
