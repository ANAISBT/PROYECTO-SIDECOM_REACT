import '../CSS/ItemDetail.css';

import React, { useState } from 'react'

import ItemCount from './ItemCount';
import {Link} from 'react-router-dom';
import { useCartContext } from '../context/CartContext';

const ItemDetail = ({producto}) => {

  const {id, Nombre, Precio, Foto, Categoria,Stock} = producto;
const [Aumento, setAumento] = useState(true);
  const {AgregarProducto}= useCartContext();

  const Agregar = (cantidad) => {
    
    AgregarProducto({...producto, cantidad})
    setAumento(false);
  }

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
        {Aumento ?
      <ItemCount stock={Stock} inicial={1} Agregar={Agregar}/>
      :
      <div>
        <Link to="/"><button onClick={()=>setAumento(true)}>Seguir comprando</button></Link>
        <Link to="/carrito"><button>Terminar compra</button></Link>
        </div>
      }
      </div>
    </div>
  )
}

export default ItemDetail