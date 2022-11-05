import "../CSS/ItemCount.css";

import React, { useState } from 'react';

import { Button } from 'react-bootstrap';

const ItemCount = ({stock, inicial,Agregar}) => {
    const [cantidad, setCantidad] = useState(inicial);

    const Aumento = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        }
    }

    const Disminuyo = () => {
        if (cantidad > inicial) {
            setCantidad(cantidad- 1);
        }
    }

    const Agrego = () => {
      Agregar(cantidad);
    }

  return <>
  <center>
    <div className="container flex-column ">
      <div className="flex">
  <Button  onClick={(Disminuyo)}>-</Button>
        <p>{cantidad}</p>
      <Button onClick={(Aumento)}>+</Button>
      </div>
      <Button onClick={(Agrego)}>Agregar al carrito</Button>
    </div>
    </center>
  </>
}

export default ItemCount