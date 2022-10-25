import '../CSS/ItemListContainer.css'

import React, { useEffect, useState } from 'react'

import Item from './Item'
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
    <div className='flex'>
    {
      loading ? <div>Cargando...</div> :
    
    items.map(item => <div
                      key={item.id}
                      style={{margin:50}}
                      className="col-md-3 flex">
                          <Item {...item} />

    </div>)}
    </div>
    </>
  )
}

export default ItemListContainer
