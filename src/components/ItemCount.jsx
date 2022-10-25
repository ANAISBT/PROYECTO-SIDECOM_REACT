import "../CSS/ItemCount.css";

import { Button } from 'react-bootstrap';
import React from 'react'
import { useState } from 'react';

const ItemCount = () => {
    const [count, setCount] = useState(1);
    const [stock, setStock] = useState(5);
    const [initial, setInitial] = useState(1);
    const [final, setFinal] = useState(5);

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


  return <>
    <div className="container">
  <Button  onClick={(handleSubstract)}>-</Button>
        <p>{count}</p>
      <Button onClick={(handleAdd)}>+</Button>
    </div>
  </>
}

export default ItemCount