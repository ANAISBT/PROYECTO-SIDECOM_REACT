import '../CSS/ItemListContainer.css'

import ItemCount from './ItemCount';
import React from 'react'

const ItemDetail = ({item}) => {

  const {id, nombre, precio, foto, categoria} = item;



  return (
    <div className='flex'>
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
                          </div>
                          <ItemCount />
                        </div>
    </div>
    </div>
  )
}

export default ItemDetail