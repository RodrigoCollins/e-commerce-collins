import React, {useContext} from 'react'
import { CartContext } from '../../context/cartcontext'
import './Cart.css'


const CartItem = ({ img, desc, price, quantity}) => {
    
    const {removeFromCart} = useContext(CartContext)
  
  return (
    <article className='cart-item'>
      <img src={img} alt={desc} />
      <div>
        <h4>{desc}</h4>
        <h4 className='item-price'>${price}</h4>
        
        <button className='remove-btn' onClick={removeFromCart}>
          remove
        </button>
      </div>
      <div>
        <p className='amount'>{quantity}</p> 
      </div>
    </article>
  )
}

export default CartItem
