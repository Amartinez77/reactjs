import React from "react";
import { useCartContext } from "../../Context/CartContext";
import {} from "../CantProd/CantProdStyle.css";
const CantProd = () => {
  const { totalQuantity } = useCartContext();

  if (totalQuantity() !== 0) {
    return <div className="cantProductos">{totalQuantity()}</div>;
  } else {
    return <div></div>;
  }
};

export default CantProd;
