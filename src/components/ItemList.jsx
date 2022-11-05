import React, { memo } from 'react'

import Item from './Item'

const ItemList = memo(({productos}) => {
  return(
    <div className='flex'>
        {
            productos.map((prod) => (<>
            <Item key={prod.id} producto={prod} />
            </>))
        }
    </div>
    )
}
)

export default ItemList