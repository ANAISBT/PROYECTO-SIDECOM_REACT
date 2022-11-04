import '../CSS/ItemListContainer.css'

import React, { useEffect, useState } from 'react'
import {collection, doc, getDoc, getDocs, getFirestore, query, where} from 'firebase/firestore'

import Item from './Item'
import ItemList from './ItemList'
import { Link } from 'react-router-dom'
import { gFetch } from '../helpers/gFetch'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  const {categoriaId} = useParams()
  // console.log(categoriaId);

  //para que se reciban todos los productos
   
  useEffect(() => {
    const db = getFirestore()
    const queryCollection= collection(db,'items')
    const queryFiltrada = categoriaId ? query(queryCollection, where('Categoria','==',categoriaId)) : queryCollection
    // const queryFilter=query(queryCollection, where('Categoria', '==', categoriaId))
    // const queryFilter=query(queryCollection, where('Precio', '>', '1500'))
    getDocs(queryFiltrada)
    .then(resp => {setItems(resp.docs.map(item=>({id:item.id, ...item.data()})))})
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
  }, [categoriaId])

  
  return (
    <>
    <div className='flex'>
    {
      loading ? <div>Cargando...</div> :
    
      <ItemList productos={items} />
    }
    </div>
    </>
  )
}

export default ItemListContainer
