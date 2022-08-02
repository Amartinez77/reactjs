import React from 'react'
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const ButtonComprar = () => {
  return (
    <>
      <Link to="/cart">
        <Button variant='primary'>
          finalizar compra
        </Button>
      
      </Link>
    </>
  );
}

export default ButtonComprar