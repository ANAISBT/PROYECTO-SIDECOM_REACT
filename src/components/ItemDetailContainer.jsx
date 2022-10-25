import React, { useEffect, useState } from 'react'

import ItemDetail from './ItemDetail'
import { gFetch } from '../helpers/gFetch'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)
    const {ItemId} = useParams()
    console.log(ItemId);

    useEffect(() => {
        gFetch()
        .then(resp => setItem(resp.find(item => item.id === parseInt(ItemId))))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }, [ItemId])


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
