import '../CSS/ItemListContainer.css'

import ItemCount from './ItemCount';
import { Link } from 'react-router-dom'
import React from 'react'

const Item = (item) => {

  const {id, nombre, precio, foto, categoria} = item;

  return <>
  
                        <Link to={`/item/${id}`}>
                        <div className="card" >
                        <div className="card-header">
                          {`${nombre} - ${categoria}`}
                          </div>
                          <div className="card-body">
                          <img src={foto} className="card-img-top" alt="" style={{width:400}}/>
                            Precio: S/ {precio}
                          </div>
                          <div className="card-footer">
                            <button className="btn btn-primary">Detalle del Producto</button>
                          </div>
                        </div>
                          </Link>
  </>
}

export default Item