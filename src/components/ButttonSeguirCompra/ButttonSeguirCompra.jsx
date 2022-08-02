
import React from 'react'
import { Link } from "react-router-dom";

const ButttonSeguirCompra = () => {
  return (
    <>
      <Link to='/'>
        <button className='btn btn-success'>
          Seguir Comprando
        </button>
      </Link>
    </>
  )
}

export default ButttonSeguirCompra