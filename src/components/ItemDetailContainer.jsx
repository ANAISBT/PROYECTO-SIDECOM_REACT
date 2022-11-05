import React, { useEffect, useState } from 'react'
import {doc, getDoc, getFirestore} from 'firebase/firestore'

import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)
    const {ItemId} = useParams()
    console.log(ItemId);

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
