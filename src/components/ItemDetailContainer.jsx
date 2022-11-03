import React, { useEffect, useState } from 'react'
import {collection, doc, getDoc, getDocs, getFirestore, query, where} from 'firebase/firestore'

import ItemDetail from './ItemDetail'
import { gFetch } from '../helpers/gFetch'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)
    const {ItemId} = useParams()
    console.log(ItemId);

    // useEffect(() => {
    //     gFetch()
    //     .then(resp => setItem(resp.find(item => item.id === ItemId)))
    //     .catch(err => console.log(err))
    //     .finally(() => setLoading(false))
    // }, [ItemId])

    // console.log(item);

    // para que se reciba un solo producto
  useEffect(() => {
    const db = getFirestore()
    const queryOne= doc(db,'items',ItemId)
    getDoc(queryOne)
    .then(resp => setItem({id:resp.id, ...resp.data()}))
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
  }, [])

  return (
    <>
    {
        loading ? <div>Cargando...</div> :
         <ItemDetail item={item} />
    }
    </>
  )
}

export default ItemDetailContainer
