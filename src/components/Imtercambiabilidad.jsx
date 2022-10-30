import { Link } from 'react-router-dom'
import React from 'react'
import { useState } from 'react'

const InputCounter= () => {
    return <>
        <Link to="/carrito">
        <button className="btn btn-primary">Terminar compra- Ir a carrito</button>
        </Link>
        <Link to="./ItemListContainer">
        <button className="btn btn-primary">Seguir comprando</button>
        </Link>
    </>
}

const ButtonCounter = ({handleInter}) => {
     return <button
     className='btn btn-outline-success'
    onClick={handleInter}>
    Agregar al carrito
    </button>    }

const Intercambiabilidad = () => {
    const [inputType, setInputType] = useState('button');

    const handleInter = () => {
        setInputType('input');
    }

  return <div>
    {
        inputType === 'button' ? 
        <ButtonCounter handleInter={handleInter} /> 
        :
         <InputCounter />
    }
    </div>
}

export default Intercambiabilidad 