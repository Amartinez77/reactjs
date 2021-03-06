

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../helpers/getFetch";
import ItemList from "../ItemList/ItemList";
import SpinnerIcon from "../SpinnerIcon/SpinnerIcon";


const ItemListContainer = ({ mensaje }) => {

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoriaId } = useParams()

  console.log(categoriaId);

  useEffect(() => {
    if (categoriaId) {
      setLoading(true);
      getFetch() // mock de una consulta a una api
        .then((respuesta) =>
          setProductos(
            respuesta.filter((producto) => producto.categoria === categoriaId)
          )
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      getFetch() // mock de una consulta a una api
        .then((respuesta) => setProductos(respuesta))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [categoriaId]);

  // const onAdd = (cant) => {
  //   console.log(`cantidad: ${cant} `);
  // };

  return (
    <div className="container">
      <h1>{mensaje}</h1>
      <hr />
      {loading ? <SpinnerIcon/> : <ItemList productos={productos} />}

      
      {/* <ItemCount initial={1} stock={10} onAdd={onAdd} /> */}
    </div>
  );
};

export default ItemListContainer;
