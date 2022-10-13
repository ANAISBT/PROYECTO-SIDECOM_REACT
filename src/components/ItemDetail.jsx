import React from 'react'

const ItemDetail = (item) => {
  return (
    <div>
        <div
                      key={item.id}
                      style={{marginLeft:100}}
                      className="col-md-3">
                        <div className="card" >
                        <div className="card-header">
                        {`${item.nombre} - ${item.categoria}`}
                          </div>
                          <div className="card-body">
                          <img src={item.foto} className="card-img-top" alt="" />
                            {item.precio}
                          </div>
                        </div>

    </div>
    </div>

  )
}

export default ItemDetail