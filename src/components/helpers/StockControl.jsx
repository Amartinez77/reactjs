import React from 'react'

const StockControl = ({ stock }) => {
  
  if (stock=== 0) {
    return <h3 className='outStock'>Producto fuera de stock</h3>
  } else if (stock>0 && stock<5) {
    return <h3 className='lowStock'>Quedan pocas unidades: <span>{stock}</span></h3>
  } else {
    return <h3 className='highStock'> Disponibles: <span>{stock}</span></h3>
  }

  
}

export default StockControl