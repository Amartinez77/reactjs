import React from 'react'
import { Container } from 'react-bootstrap'
import ButttonSeguirCompra from '../ButttonSeguirCompra/ButttonSeguirCompra'

const CartEmpty = () => {
  return (
    <>
      <Container>
        <h2>Carrito</h2>
        <h3>Todavia no elegiste nada?</h3>
      <ButttonSeguirCompra/>
      </Container>
      

    </>
  )
}

export default CartEmpty