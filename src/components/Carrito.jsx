import "../CSS/Carrito.css";

import React,{useState}from 'react'
import {addDoc, collection, getFirestore} from 'firebase/firestore'

import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'

export default function Carrito () {

  const [isId, setIsId] = useState('')
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
      addDoc(orders,orden)
      .then(resp => setIsId(resp.id))
      .catch(err => console.log(err))
      .finally(() => vaciarCarrito())
  }

  const handleInputChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value
    })
  }

    return (
        <div>
            <p className="titulo">CARRITO</p>
            {isId ? <p className="Orden">Orden generada con exito, su id es: {isId}</p> : ''}
            {cartList.length === 0 ? 
            <div>
            <p className="NoProductos">No hay productos en el carrito</p> 
            <center><button><Link to='/'>Volver al inicio</Link></button></center>
            </div>
            :
            <>
            <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Producto</th>
                <th scope="col">Precio</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Eliminar</th>
              </tr>
            </thead>
              <tbody>
                {cartList.map((item) => {
                    return (
                        <tr key={item.id}>
                          <td className="flex"><img src={item.Foto} className="card-img-top" alt="" style={{width:200}}/>
                            <h3>{item.Nombre}</h3></td>
                            <td><center><p>S/ {item.Precio}</p></center></td>
                            <td><center><p>{item.cantidad}</p></center></td>
                            <td><button onClick={() => removeItem(item.id)}>X</button></td>
                        </tr>
                        
                    )
                })}
              </tbody>
            </table>
            <center><h3>Total: {precioTotal()}</h3>
            <button onClick={vaciarCarrito}>Vaciar Carrito</button></center>
            <form className="flex" onSubmit={generarOrden}>
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
            </>
            }
        </div>
    )
}
