import Item from './Item'
import React from 'react'

const ItemList = ({productos}) => {
  return(
    <div>
        {
            productos.map((item) => (<>
            <Item key={item.id} item={item} />
            </>))
        }
    </div>
    )
}

export default ItemList