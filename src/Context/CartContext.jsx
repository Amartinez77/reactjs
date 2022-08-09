import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  // funciones y estados globales

  const [cartList, setCartList] = useState([]);

  const agregarCarrito = (prod) => {
    console.log(prod.cantidad);

    let newCart = [];
    cartList.map((item) => newCart.push({ ...item }));
    // Ver si el elemento ya existe
    let index = newCart.findIndex((item) => item.id === prod.id);
    if (index < 0) {
      newCart.push({
        id: prod.id,
        categoria: prod.categoria,
        marca: prod.marca,
        tipo: prod.tipo,
        precio: prod.precio,
        imagePath: prod.imagePath,
        cantidad: prod.cantidad,
      });
    } else {
      // actualizarr la cantidad
      newCart[index].cantidad += prod.cantidad;
    }
    // Actualizar carrito
    setCartList((cart) => newCart);
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
        (acumPrecio = acumPrecio + prodObj.precio * prodObj.cantidad),
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
