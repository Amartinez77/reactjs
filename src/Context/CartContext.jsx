import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  // funciones y estados globales

  const [cartList, setCartList] = useState([]);



  const agregarCarrito = (prod) => {
    const idx = cartList.findIndex((producto) => producto.id === prod.id); // <-
    if (idx !== -1) {
      // existe el producto en el carrito
      // cartList[idx].cantidad +=   prod.cantidad
      let cant = cartList[idx].cantidad;
      cartList[idx].cantidad = cant + prod.cantidad;

      setCartList([...cartList]);
    } else {
      // no existe el producto en el carrito
      setCartList([...cartList, prod]);
    }
  };

  const vaciarCarrito = () => {
    setCartList([]);
  };

  const eliminarXunidad = (id) => {
    let isDelete = window.confirm(`esta seguro?`);
    if (isDelete) {
      let arrayNuevo = cartList.filter((el) => el.id !== id);
      setCartList(arrayNuevo);
    } else {
      return;
    }
  };

  const cantidadTotal = () => {
    return cartList.reduce(
      (contador, produObject) => (contador += produObject.cantidad),
      0
    );
  };

  const precioTotal = () => {
    return cartList.reduce(
      (acumPrecio, prodObj) =>
        (acumPrecio = acumPrecio + prodObj.price * prodObj.cantidad),
      0
    ); // <- precioTotal
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        agregarCarrito,
        vaciarCarrito,
        eliminarXunidad,
        cantidadTotal,
        precioTotal,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
