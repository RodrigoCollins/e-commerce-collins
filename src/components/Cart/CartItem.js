import React, {useContext} from 'react'
import {CartContext} from '../../context/cartcontext'

const CartItem = () => {

const cart = useContext(CartContext)
  
  return (
    <article className='cart-item'>
      <img src={cart.img} alt={cart.desc} />
      
      
    </article>
  )
}

export default CartItem