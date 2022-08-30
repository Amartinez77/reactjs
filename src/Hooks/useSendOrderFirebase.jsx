import {
  addDoc,
  collection,
  documentId,
  getDocs,
  getFirestore,
  query,
  where,
  writeBatch,
} from "firebase/firestore";
import { useState } from "react";

/**
 * It sends an order to firebase, updates the stock of the products in the order and returns the id of
 * the order.
 * @returns An object with two properties: sendOrder and id.
 */
export const useSendOrderFirebase = (cartList, totalPrice, emptyCart) => {
  const [id, setId] = useState("");

  const sendOrder = async (e, form) => {
    console.log(form);
    e.preventDefault();

    const order = {};
    order.buyer = form;

    order.items = cartList.map((prod) => {
      return {
        product: prod.brand,
        id: prod.id,
        price: prod.price,
      };
    });

    order.date = new Date();
    order.total = totalPrice();

    const db = getFirestore();
    const queryOrders = collection(db, "orders");
    addDoc(queryOrders, order)
      .then((resp) => setId(resp.id))
      .catch((err) => console.log(err));

    const queryCollectionStock = collection(db, "products");

    const queryUpdateStock = query(
      queryCollectionStock,
      where(
        documentId(),
        "in",
        cartList.map((it) => it.id)
      )
    );

    const batch = writeBatch(db);

    await getDocs(queryUpdateStock)
      .then((resp) =>
        resp.docs.forEach((res) =>
          batch.update(res.ref, {
            stock:
              res.data().stock -
              cartList.find((prod) => prod.id === res.id).cantidad,
          })
        )
      )
      .catch((err) => console.log(err))
      .finally(() => {
        emptyCart();
      });

    batch.commit();
  };

  return { sendOrder, id };
};
