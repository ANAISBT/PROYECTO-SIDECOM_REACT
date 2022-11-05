import '../CSS/Item.css'

import React, { memo } from 'react'

import { Link } from 'react-router-dom'

const Item = memo(({producto}) => {

  const {id, Nombre, Precio, Foto, Categoria} = producto;

  return <>
  
                        <Link to={`/item/${id}`}>
                        <div className="card " >
                        <div className="card-header">
                          {`${Nombre} - ${Categoria}`}
                          </div>
                          <div className="card-body">
                          <img src={Foto} className="card-img-top" alt="" style={{width:200}}/>
                          <p className='Precio'>Precio: S/<span>{Precio}</span></p>
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