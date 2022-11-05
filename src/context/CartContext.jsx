import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

 export const useCartContext = () => useContext(CartContext);


const CartContextProvider = ({children}) => { 

const [ListaCarrito, setListaCarrito] = useState([])

const AgregarProducto = (producto) => {
     const index = ListaCarrito.findIndex((item) => item.id === producto.id);
    
    if(index===-1){
     setListaCarrito([...ListaCarrito,producto]);
}
else{
    const newListaCarrito = [...ListaCarrito];
    newListaCarrito[index].cantidad += producto.cantidad;
    setListaCarrito([...newListaCarrito]);

}
}

const vaciarCarrito = () => {
    setListaCarrito([]);
}

const removeItem= (id) => {
    setListaCarrito( ListaCarrito.filter(item => item.id !== id) )
}



const precioTotal = () => {
    return parseInt(ListaCarrito.reduce((acum, prod) => acum + (prod.cantidad* prod.Precio) , 0))
}

  return (
        <CartContext.Provider value={{
            ListaCarrito,
            AgregarProducto,
            vaciarCarrito,
            precioTotal,
            removeItem
        }}>
            {children}
        </CartContext.Provider>
  );
}

export default CartContextProvider;