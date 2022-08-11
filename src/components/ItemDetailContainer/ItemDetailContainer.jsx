
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { getFetch } from "../helpers/getFetch";
import ItemDetail from '../ItemDetail/ItemDetail';
import SpinnerIcon from "../SpinnerIcon/SpinnerIcon";




const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);
  // const {detalleId}= useParams()
  // console.log(detalleId);
  const { id } = useParams();

  console.log(id);

  // traer un producto por id -> ItemDetailContainer
  useEffect(()=>{
    const db = getFirestore()
    setLoading(true);
      const queryProducto = doc(db, 'products', id)
      getDoc(queryProducto)
        .then((resp) => setProducto({ id: resp.id, ...resp.data() }))
        .finally(() => setLoading(false));
  }, [id])

  // useEffect(() => {
  //     setLoading(true);
  //     getFetch(id)
  //       .then((respuesta) => setProducto(respuesta))
  //       .finally(() => setLoading(false));

  // }, [id]);

  return (
    <>
      ItemDetailContainer
      {loading ? <SpinnerIcon /> : <ItemDetail producto={producto} />}
    </>
  );
}

export default ItemDetailContainer