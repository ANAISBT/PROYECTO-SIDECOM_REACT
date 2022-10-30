import '../CSS/ItemListContainer.css'

import React, { useState } from 'react'

import Abstracion from './Abstracion';
import Intercambiabilidad from './Imtercambiabilidad';
import ItemCount from './ItemCount';
import {Link} from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import { useContext } from 'react';

const ItemDetail = ({item}) => {

  const {id, nombre, precio, foto, categoria,stock} = item;
const [isCount, setIsCount] = useState(true);
  const {addItem,cartList}= useCartContext();

  const onAdd = (cantidad) => {
    
    addItem({...item, cantidad})
    setIsCount(false);
  }
  console.log(cartList);
  return (
    <div className='row'>
      <div className='col-6'>
      <div
         key={id}
         style={{margin:50}}
         className="col-md-3 flex">
         <div className="card" >
          <div className="card-header">
            {`${nombre} - ${categoria}`}
          </div>
          <div className="card-body">
          <img src={foto} className="card-img-top" alt="" style={{width:400}}/>
           Precio: S/ {precio}
           {/* <button onClick={()=>onAdd()}>Agregar al carrito</button> */}
          </div>
          </div>
      </div>
      </div>
      <div className='col-6'>
        {isCount ?
      <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
      :
      <div>
        
        <Link to="/"><button onClick={()=>setIsCount(true)}>Seguir comprando</button></Link>
        <Link to="/carrito"><button>Terminar compra</button></Link>
        </div>
      }
      </div>
    </div>
  )
}

export default ItemDetail