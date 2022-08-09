import React from 'react'
import { useCartContext } from '../../Context/CartContext';
import {  } from "../CantProd/CantProdStyle.css";
const CantProd = () => {
  const { cantidadTotal } = useCartContext();
  
  
  if (cantidadTotal() !== 0) {
    return ( 

      <div className="cantProductos">{cantidadTotal()}</div>

    )
  } else {
    return (
      
      <div></div>

    )
  }

}

export default CantProd