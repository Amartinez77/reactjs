
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../helpers/getFetch";
import ItemDetail from '../ItemDetail/ItemDetail';
import SpinnerIcon from "../SpinnerIcon/SpinnerIcon";




const ItemDetailContainer = () => {

  const [producto, setProducto] = useState({})
  const [loading, setLoading] = useState(true);
  // const {detalleId}= useParams()
  // console.log(detalleId);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
      setLoading(true);
      getFetch(id)
        .then((respuesta) => setProducto(respuesta))
        .finally(() => setLoading(false));
    
    
  }, [id]);

  
  
  return (
    <>
      ItemDetailContainer
      {loading ? <SpinnerIcon /> : <ItemDetail producto={producto} />}
    </>
  );
}

export default ItemDetailContainer