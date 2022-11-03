import React, { memo } from 'react'

import Item from './Item'

//MEMO - React.memo() es un HOC que sirve para memorizar un componente, es decir, que si sus props no cambian, no se vuelve a renderizar.
const ItemList = memo(({productos}) => {
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
)

export default ItemList