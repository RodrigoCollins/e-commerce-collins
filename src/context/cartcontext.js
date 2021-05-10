import { createContext, useEffect, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [quantity, setQuantity] = useState(0)


        const addToCart = (product) => {
        setCart([...cart, product ])
 }
    const removeFromCart = (itemId) =>{
        const newCart = cart.filter((item => item.id !== itemId))
        setCart(newCart)
    }
    const clearCart = () =>{
        setCart('')
        
    }
    useEffect(
        () => {       
             setQuantity(cart.length)        
        },[cart]
    )
    console.log(cart)
    
    return(
        <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart, quantity }}>
            {children}
        </CartContext.Provider>
    )
}