import "../CSS/ItemCount.css";

import React, { useState } from 'react';

import { Button } from 'react-bootstrap';

const ItemCount = ({stock, initial,onAdd}) => {
    const [count, setCount] = useState(initial);

    const handleAdd = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    const handleSubstract = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    }

    const handleonAdd = () => {
      onAdd(count);
    }

  return <>
  <center>
    <div className="container flex-column ">
      <div className="flex">
  <Button  onClick={(handleSubstract)}>-</Button>
        <p>{count}</p>
      <Button onClick={(handleAdd)}>+</Button>
      </div>
      <Button onClick={(handleonAdd)}>Agregar al carrito</Button>
    </div>
    </center>
  </>
}

export default ItemCount