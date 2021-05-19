import { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    

    const addToCart = (item, quantity) => {
        if(isInCart(item.id)){
            quantity += quantity
            let index = cart.findIndex((e) => e.item.id === item.id)
            cart.splice(index, 1)
            setCart([...cart, {'item': item , 'quantity': quantity }])
            console.log(getTotal)
        }else{
            setCart([...cart, {'item': item , 'quantity': quantity }])
        }
        
 }
    const removeFromCart = (itemId) =>{
        cart.splice(
            cart.findIndex(( item => item.id !== itemId)), 1)
        
        setCart([...cart])
    }
   
    const clearCart = () =>{
        setCart([])
        
    }
    const itemCount = () => {
        return cart.reduce((acc,item) => (acc += item.quantity), 0)
    }
      
       
    const getTotal = () => {
        return cart.reduce((acc, item) =>(acc += (item.item.price * item.quantity)), 0);
       
    }

    const isInCart = (id) => {
        return cart.find((item)=>{
            if(item.item.id !== id){
                return false
            }
            else{
                return item.item.id
            }
        })

    }

      
    return(
        <CartContext.Provider value={{ cart , getTotal, itemCount, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

