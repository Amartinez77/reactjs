import React, { useState } from "react";
import { useCartContext } from "../../Context/CartContext";
import ButttonSeguirCompra from "../ButttonSeguirCompra/ButttonSeguirCompra";
import CartEmpty from "./CartEmpty";
import {
  addDoc,
  collection,
  doc,
  documentId,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
  writeBatch,
} from "firebase/firestore";

const Cart = () => {
  const { cartList, vaciarCarrito, eliminarXunidad, precioTotal } =
    useCartContext();
  const [id, setId] = useState("");
  const [date, setDate] = useState({});
  // console.log(cartList);

  // funcion que guarda la orden de compra
  const sendOrder = async (e) => {
    e.preventDefault();

    const order = {};
    order.buyer = {
      email: "pepe@gmail.com",
      name: "pepe",
      phone: "38884516161",
    };

    order.items = cartList.map((prod) => {
      return {
        product: prod.brand,
        id: prod.id,
        price: prod.price,
      };
    });

    order.date = new Date();
    order.total = precioTotal();

    // console.log(order);
    // guardar orden en la base de datos

    const db = getFirestore();
    const queryOrders = collection(db, "orders");
    addDoc(queryOrders, order)
      .then((resp) => setId(resp.id))
      .catch((err) => console.log(err));

    // actualizar un documento

    //   const queryUpdateDoc = doc(db, 'products', 'A59XJcDJSMZIW1GPk949')
    //   updateDoc(queryUpdateDoc, {
    //       stock: 29
    //   })
    //   .then(()=> console.log('Item actualizado'))


    // actualizar el stock
    const queryCollectionStock = collection(db, 'products') // apuntar a una coleccion de firestore

    //filtro para la consulta
    const queryUpdateStock = query(
      queryCollectionStock,
      where( documentId() , 'in' , cartList.map(it => it.id))  // in es que esten en...
    )

    const batch = writeBatch(db)

    await getDocs(queryUpdateStock)
      .then(resp => resp.docs.forEach(res => batch.update(res.ref, { stock: res.data().stock - cartList.find(prod => prod.id == res.id).cantidad })))
      .catch(err => console.log(err))
      .finally(() => { vaciarCarrito() })
    
    batch.commit()
  };

  return (
    (cartList.length > 0 && (
      <div className="container">
        <h2>Cart</h2>
        {id.length > 0 ? (
          <>
            <h2>El id de la orden es: {id}</h2>            
            <h3>gracias por su compra</h3>
          </>
        ) : (
          <ul>
            {cartList.map((item) => (
              <li key={item.id}>
                <div className="w-25">
                  {console.log(item.cantidad)}
                  <img
                    src={item.imagePath}
                    alt="Foto de producto"
                    className="w-25"
                  />
                  nombre: {item.brand} - cantidad {item.cantidad} {item.price} -
                  Subtotal: {item.cantidad * item.price}
                </div>
                <button
                  onClick={() => {
                    eliminarXunidad(item.id);
                  }}>
                  {" "}
                  X{" "}
                </button>
              </li>
            ))}
          </ul>
        )}

        <div>
          <h4>
            total: <span>{precioTotal()}</span>
          </h4>
        </div>
        <button className="btn btn-danger" onClick={vaciarCarrito}>
          Vaciar todo el carrito
        </button>

        <br />
        <ButttonSeguirCompra />
        <br />
        <button className="btn btn-danger" onClick={sendOrder}>
          enviar orden de compra
          
        </button>
      </div>
    )) || <CartEmpty order={id } />
  );
};

export default Cart;
