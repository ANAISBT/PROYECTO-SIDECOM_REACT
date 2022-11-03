import '../CSS/ItemListContainer.css'

import React, { memo } from 'react'

import ItemCount from './ItemCount';
import { Link } from 'react-router-dom'

const Item = memo(({item}) => {

  const {id, Nombre, Precio, Foto, Categoria} = item;

  return <>
  
                        <Link to={`/item/${id}`}>
                        <div className="card" >
                        <div className="card-header">
                          {`${Nombre} - ${Categoria}`}
                          </div>
                          <div className="card-body">
                          <img src={Foto} className="card-img-top" alt="" style={{width:400}}/>
                            Precio: S/ {Precio}
                          </div>
                          <div className="card-footer">
                            <button className="btn btn-primary">Detalle del Producto</button>
                          </div>
                        </div>
                          </Link>
  </>
}
)

export default Item