
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../helpers/getFetch";
import ItemDetail from '../ItemDetail/ItemDetail';




const ItemDetailContainer = () => {

  const [producto, setProducto] = useState({})
  // const [loading, setLoading] = useState(true);
  // const {detalleId}= useParams()
  // console.log(detalleId);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
   
      getFetch(id)
        .then((respuesta) => setProducto(respuesta))
        // .finally(()=>setLoading(false))
    
    
  }, [id]);

  
  
  return (
    <div>
      ItemDetailContainer
    <ItemDetail producto={producto} />
      
    
    
    
    </div>
  )
}

export default ItemDetailContainer