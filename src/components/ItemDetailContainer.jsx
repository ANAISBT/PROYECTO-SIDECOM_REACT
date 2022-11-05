import React, { useEffect, useState } from 'react'
import {doc, getDoc, getFirestore} from 'firebase/firestore'

import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    const {ItemId} = useParams()

    // para que se reciba un solo producto
  useEffect(() => {
    const db = getFirestore()
    const queryOne= doc(db,'items',ItemId)
    getDoc(queryOne)
    .then(resp => setProducto({id:resp.id, ...resp.data()}))
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
  }, [])

  return (
    <>
    {
        loading ? <div>Cargando...</div> :
         <ItemDetail producto={producto} />
    }
    </>
  )
}

export default ItemDetailContainer
