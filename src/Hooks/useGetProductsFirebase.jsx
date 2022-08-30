import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


/**
 * It gets the products from firebase and returns an array with the loading state and the products
 * @returns An array with two elements. The first element is the loading state and the second element
 * is the products state.
 */

export const useGetProductsFirebase = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoriaId } = useParams();

  useEffect(() => {
      
    const db = getFirestore();
    const queryCollection = collection(db, "products");
    const queryCollectionFilter = categoriaId
      ? query(queryCollection, where("category", "==", categoriaId))
      : queryCollection;
    getDocs(queryCollectionFilter)
      .then((resp) => setProducts(resp.docs.map((prod) => ({ id: prod.id, ...prod.data() }))) )
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));

    
  }, [categoriaId]);

  return [products, loading]
}

