import React from "react";
import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 g-4">
      {products?.map((prod) => (
        <Item key={prod.id} prod={prod} />
      ))}
    </div>
  );
};

export default ItemList;
