import React, { memo } from 'react'

import Item from './Item'

const ItemList = memo(({productos}) => {
  return(
    <div className='flex '>
        {
            productos.map((item) => (<>
            <Item key={item.id} item={item} />
            </>))
        }
    </div>
    )
}
)

export default ItemList