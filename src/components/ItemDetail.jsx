import '../CSS/ItemDetail.css';

import React, { useState } from 'react'

import ItemCount from './ItemCount';
import {Link} from 'react-router-dom';
import { useCartContext } from '../context/CartContext';

const ItemDetail = ({item}) => {

  const {id, Nombre, Precio, Foto, Categoria,Stock} = item;
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
         style={{margin:30}}
         className=" flex">
         <div className="card container_card" >
          <div className="card-header">
           <p className='title_card'> {`${Nombre} - ${Categoria}`}</p>
          </div>
          <div className="card-body">
          <img src={Foto} className="card-img-top" alt="" style={{width:400}}/>
          </div>
          </div>
      </div>
      </div>
      <div className='col-6'>
      <center><p className='Price'>Precio: S/ <span>{Precio}</span></p></center>
        {isCount ?
      <ItemCount stock={Stock} initial={1} onAdd={onAdd}/>
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