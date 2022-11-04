import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

 export const useCartContext = () => useContext(CartContext);


const CartContextProvider = ({children}) => { 

const [cartList, setCartList] = useState([])

const addItem = (producto) => {
     const index = cartList.findIndex((item) => item.id === producto.id);
    
    if(index===-1){
     setCartList([...cartList,producto]);
}
else{
    const newCartList = [...cartList];
    newCartList[index].cantidad += producto.cantidad;
    setCartList([...newCartList]);

}
}

const vaciarCarrito = () => {
    setCartList([]);
}

const removeItem= (id) => {
    setCartList( cartList.filter(item => item.id !== id) )
}



const precioTotal = () => {
    return parseInt(cartList.reduce((acum, prod) => acum + (prod.cantidad* prod.Precio) , 0))
}

  return (
        <CartContext.Provider value={{
            cartList,
            addItem,
            vaciarCarrito,
            precioTotal,
            removeItem
        }}>
            {children}
        </CartContext.Provider>
  );
}

export default CartContextProvider;