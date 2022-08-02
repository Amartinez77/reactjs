import React from "react";
import { useState } from "react";

const ItemCount = ({ initial = 1, stock = 10, onAdd }) => {
  const [count, setCount] = useState(initial);

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    } else {
      console.log("excede stock");
    }

    // (count>props.stock) ? <h2>no hay stock</h2> : console.log('todo bien');
  };

  const restar = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

  const addCart = () => {
    if (count < stock) {
      onAdd(count);
    }
    
  };

  return (
    <div>
      <br />
      <div className="card w-25" style={{ border: "none" }}>
        <h3>{count} </h3>
        <button className="btn btn-primary" onClick={sumar}>
          +
        </button>
        <button className="btn btn-secondary" onClick={restar}>
          -
        </button>
        <button className="btn btn-success" onClick={addCart}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
