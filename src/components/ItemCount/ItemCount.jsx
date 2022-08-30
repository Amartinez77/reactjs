import React from "react";
import { useState } from "react";

/* The above code is a React component that is used to add items to a shopping cart. */
const ItemCount = ({ initial = 1, stock = 10, onAdd }) => {
  const [count, setCount] = useState(initial);

  /**
   * If the count is less than the stock, add one to the count, otherwise log a message to the console.
   */
  const add = () => {
    if (count < stock) {
      setCount(count + 1);
    } else {
      console.log("excede stock");
    }
  };

 /**
  * If the count is greater than the initial value, then subtract 1 from the count.
  */
  const subtract = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

 /**
  * If the count is less than the stock, then add the count to the cart.
  */
  const addCart = () => {
    if (count < stock) {
      onAdd(count);
    }
  };

  return (
    <div>
      <div style={{ border: "none" }}>
        <div className="d-flex justify-content-center">
          <button className="btn btn-light " onClick={add}>
            +
          </button>
          <h3>{count} </h3>
          <button className="btn btn-light" onClick={subtract}>
            -
          </button>
        </div>
        <button className="btn btn-success col" onClick={addCart}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
