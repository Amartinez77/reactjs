import React from 'react'
import { useCartContext } from '../../Context/CartContext'
import ButttonSeguirCompra from '../ButttonSeguirCompra/ButttonSeguirCompra'

const Cart = () => {

  const { cartList, vaciarCarrito, eliminarXunidad } = useCartContext()
console.log(cartList);
  return (
    <div className="container">
      <h2>Cart</h2>
      <ul>
        {cartList.map((item) => (
          <li key={item.id}>
            <div className="w-25">
              <img src={item.imagePath} alt="Foto de producto" className="w-25" />
              nombre: {item.marca} - cantidad {item.cantidad} {item.precio} -
              Precio: {item.cantidad * item.precio}
            </div>
            <button onClick={()=>{ eliminarXunidad(item.id) } }> X </button>
          </li>
        ))}
      </ul>
      <button onClick={vaciarCarrito}>Vaciar todo el carrito</button>
      <ButttonSeguirCompra />
    </div>
  );
}

export default Cart