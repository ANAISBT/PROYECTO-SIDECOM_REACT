import {addDoc, collection, doc, getDoc, getDocs, getFirestore, query, updateDoc, where} from 'firebase/firestore'
import{useEffect, useState} from 'react'

import Input from './Input'
import ItemCount from './ItemCount'
import React from 'react'
import { useCartContext } from '../context/CartContext'

export default function Carrito () {

const [dataForm, setDataForm] = useState({ 
   name: '', 
   email: '', 
   phone: ''  })

   const {cartList, vaciarCarrito,precioTotal,removeItem} = useCartContext();

  const generarOrden = async(e) => {
    e.preventDefault()
    const orden = {
      buyer: {
        name: dataForm.name,
        phone: dataForm.phone,
        email: dataForm.email
      },
      items: cartList.map(item => {
        const { id, Nombre:title, Precio } = item
        return { id, title, Precio }
        }),
      total: precioTotal()
      }
      const db= getFirestore();
      const orders = collection(db,'orders');
      addDoc(orders,orden).then(resp => console.log(resp))
      .catch(err => console.log(err))
      .finally(() => vaciarCarrito())

      //actualizar un documento
      // const db= getFirestore();
      // const orderDoc = doc(db,'items','TVOt1ffUh96eV8DZTLqG');
      // updateDoc(orderDoc,
      //   {
      //     Stock: 10
      //   })
      // .then(resp => console.log('producto actualizado'))
      // .catch(err => console.log(err))

  // console.log(orden)
  }

  const handleInputChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value
    })
  }

  console.log(dataForm);
    return (
        <div>
            <h1>Carrito</h1>
            <div>
                {cartList.map((item) => {
                    return (
                        <div key={item.id}>
                            <h3>{item.Nombre}</h3>
                            <p>{item.Precio}</p>
                            <p>{item.cantidad}</p>
                        </div>
                        
                    )
                })}
            </div>
            <h3>Total: {precioTotal()}</h3>
            <button onClick={vaciarCarrito}>Vaciar Carrito</button>
            <form onSubmit={generarOrden}>
            <input 
                    type="text" 
                    name="name"
                    placeholder="Nombre" 
                    value={dataForm.name}
                    onChange={handleInputChange}
                />
                <input 
                    type="text"
                    name="phone" 
                    value={dataForm.phone}
                    placeholder="Teléfono" 
                    onChange={handleInputChange}
                />
                <input 
                    type="text" 
                    name="email"
                    value={dataForm.email}
                    placeholder="Email" 
                    onChange={handleInputChange}
                />

              <button type='submit'>Generar Orden</button>
            </form>
        </div>
    )
}
