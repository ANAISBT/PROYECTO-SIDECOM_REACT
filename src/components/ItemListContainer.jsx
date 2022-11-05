import '../CSS/ItemListContainer.css'

import React, { useEffect, useState } from 'react'
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'

import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const {categoriaId} = useParams()

  //para que se reciban todos los productos
   
  useEffect(() => {
    const db = getFirestore()
    const queryCollection= collection(db,'items')
    const queryFiltrada = categoriaId ? query(queryCollection, where('Categoria','==',categoriaId)) : queryCollection
    getDocs(queryFiltrada)
    .then(resp => {setProductos(resp.docs.map(item=>({id:item.id, ...item.data()})))})
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
  }, [categoriaId])

  
  return (
    <>
    <div className='flex'>
    {
      loading ? <div>Cargando...</div> :
    
      <ItemList productos={productos} />
    }
    </div>
    </>
  )
}

export default ItemListContainer
