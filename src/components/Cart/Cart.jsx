import React from 'react'
import { useCartContext } from '../../Context/CartContext'
import ButttonSeguirCompra from '../ButttonSeguirCompra/ButttonSeguirCompra'
import CartEmpty from './CartEmpty'

const Cart = () => {

  const { cartList, vaciarCarrito, eliminarXunidad, precioTotal } = useCartContext()
  console.log(cartList);
  
  
  return (
    (cartList.length > 0 && (
      <div className="container">
        <h2>Cart</h2>
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
        <div><h4>total: <span>{ precioTotal() }</span></h4></div>
        <button className='btn btn-danger' onClick={vaciarCarrito}>Vaciar todo el carrito</button>
        <br/>
        <ButttonSeguirCompra />
      </div>
    ))
    || <CartEmpty />
  );
}

export default Cart