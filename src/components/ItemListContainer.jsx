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
    if(categoriaId){
    const db = getFirestore()
    const queryCollection= collection(db,'items')
    // const queryFilter=query(queryCollection, where('Categoria', '==', categoriaId))
    const queryFilter=query(queryCollection, where('Categoria', '==', categoriaId));
    // const queryFilter=query(queryCollection, where('Precio', '>', '1500'))
    getDocs(queryFilter)
    .then(resp => {setItems(resp.docs.map(item=>({id:item.id, ...item.data()})))})
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
    }else{
    const db = getFirestore()
    const queryCollection= collection(db,'items')
    getDocs(queryCollection)
    .then(resp => {setItems(resp.docs.map(item=>({id:item.id, ...item.data()})))})
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
    }
  }, [categoriaId])

  // useEffect(() => {
  //   if(categoriaId){
  //     gFetch()
  //     .then(resp => setItems(resp.filter(item => item.categoria === categoriaId)))
  //     .catch(err => console.log(err))
  //     .finally(() => setLoading(false))
  //   }else{
  //     gFetch()
  //     .then( data => setItems(data) )
  //     .catch( err => console.log(err) )
  //     .finally( () => setLoading(false) )}
  // }, [categoriaId])

  
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
