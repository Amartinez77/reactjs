import ItemCount from "../ItemCount/ItemCount";

import { useState, useEffect } from "react";

import { getFetch } from "../helpers/getFetch";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ mensaje }) => {

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFetch() // mock de una consulta a una api
      .then((respuesta) => setProductos(respuesta))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  const onAdd = (cant) => {
    console.log(`cantidad: ${cant} `);
  };

  return (
    <div className="container">
      <h1>{mensaje}</h1>

      {loading ? <h1>Cargando ...</h1> : <ItemList productos={productos} />}

      <hr />
      <ItemCount initial={1} stock={10} onAdd={onAdd} />
    </div>
  );
};

export default ItemListContainer;
