import Input from './Input'
import ItemCount from './ItemCount'
import React from 'react'
import { useCartContext } from '../context/CartContext'

const Carrito = () => {

  const {cartList,vaciarCarrito} = useCartContext();

  
  return <>
    <div>
      
      Carrito

      <ul>
        {cartList.map((item) => 
        <li>{item.nombre} Cantidad: {item.cantidad}</li>
        
        )}
      </ul>
      
      <button onClick={()=>vaciarCarrito()}>Vaciar carrito</button>
      </div>
    
    </>
}

export default Carrito