import { createContext, useEffect, useState } from 'react'
import {products} from '../components/Shop/ItemsData'

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [quantity, setQuantity] = useState(0)
    const [value, setValue] = useState(1)
    const [stock, setStock] = useState(5)

   const plus = () => {
   if(value < stock || value < stock){
    setValue(value + 1)
    setStock(stock-1)
   }
  }
  const less = () =>{
    if(value > stock  || value > 1){
    setValue(value - 1)
    setStock(stock + 1)
    }
  }

    const addToCart = (item) => {
        setCart([...cart, item])
        setQuantity( quantity + value )
        console.log(products)
    }
    const removeFromCart = (itemId) =>{
        const newCart = cart.filter((item => item.id !== itemId))
        setCart(newCart)
    }
    const clearCart = () =>{
        setCart('')
        setQuantity(0)
    }
    useEffect(
        () => {
            setQuantity(cart.length)
        },[cart]
    )

    return(
        <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart, quantity, plus, less, stock, value}}>
            {children}
        </CartContext.Provider>
    )
}