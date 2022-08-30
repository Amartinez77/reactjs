import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const useGetProductFirebase = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    setLoading(true);
    const queryProduct = doc(db, "products", id);
    getDoc(queryProduct)
      .then((resp) => {
        if (resp.exists()) {
          setProduct({ id: resp.id, ...resp.data() });
        } else {
          setResponse(false);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [id]);

  return [product, loading, response];
};
