import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

/* A React Context Provider. It is a component that provides a context to its children. */
const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  /**
   * If the product is already in the cart, increase the quantity by the amount added. Otherwise, add
   * the product to the cart.
   */
  const addCart = (prod) => {
    const idx = cartList.findIndex((producto) => producto.id === prod.id); // <-
    if (idx !== -1) {
      let cant = cartList[idx].cantidad;
      cartList[idx].cantidad = cant + prod.cantidad;

      setCartList([...cartList]);
    } else {
      setCartList([...cartList, prod]);
    }
  };

  const emptyCart = () => {
    setCartList([]);
  };

  /**
   * If the user confirms the deletion, then filter the cartList array to remove the item with the
   * matching id, and set the new array as the new cartList.
   * @returns the value of the function.
   */
  const removeUnit = (id) => {
    let isDelete = window.confirm(`esta seguro?`);
    if (isDelete) {
      let arrayNuevo = cartList.filter((el) => el.id !== id);
      setCartList(arrayNuevo);
    } else {
      return;
    }
  };

  /**
   * It takes an array of objects, and returns the sum of the values of the property "cantidad" of each
   * object.
   * @returns The total quantity of the products in the cart.
   */
  const totalQuantity = () => {
    return cartList.reduce(
      (contador, produObject) => (contador += produObject.cantidad),
      0
    );
  };

  /**
   * It takes an array of objects, and returns the sum of the price property of each object multiplied by
   * the cantidad property of each object.
   * @returns The total price of the products in the cart.
   */
  const totalPrice = () => {
    return cartList.reduce(
      (acumPrecio, prodObj) =>
        (acumPrecio = acumPrecio + prodObj.price * prodObj.cantidad),
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addCart,
        emptyCart,
        removeUnit,
        totalQuantity,
        totalPrice,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
