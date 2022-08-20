import React from "react";
import { Container } from "react-bootstrap";

import ButttonSeguirCompra from "../ButttonSeguirCompra/ButttonSeguirCompra";

const CartEmpty = ({ order }) => {
  return (
    <>
      {console.log(order)}
      <Container>
        {order ? (
          (<div><h3>su ticket es: {order}</h3><h3>gracias por su compra!</h3> </div>)
        ) : (
          <ButttonSeguirCompra />
        )}
      </Container>
    </>
  );
};

export default CartEmpty;
