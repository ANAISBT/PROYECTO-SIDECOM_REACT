import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import { gFetch } from '../helpers/gFetch'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  const {categoriaId} = useParams()
  console.log(categoriaId);

  useEffect(() => {
    if(categoriaId){
      gFetch()
      .then(resp => setItems(resp.filter(item => item.categoria === categoriaId)))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
    }else{
      gFetch()
      .then( data => setItems(data) )
      .catch( err => console.log(err) )
      .finally( () => setLoading(false) )}
  }, [categoriaId])


  return (
    <>
    {
      loading ? <div>Cargando...</div> :
    
    items.map(item => <div
                      key={item.id}
                      style={{marginLeft:100}}
                      className="col-md-3">
                        <Link to={`/item/${item.id}`}>
                        <div className="card" >
                        <div className="card-header">
                          {`${item.nombre} - ${item.categoria}`}
                          </div>
                          <div className="card-body">
                          <img src={item.foto} className="card-img-top" alt="" />
                            {item.precio}
                          </div>
                          <div className="card-footer">
                            <button className="btn btn-primary">Detalle del Producto</button>
                          </div>
                        </div>
                          </Link>

    </div>)}
    </>
  )
}

export default ItemListContainer
