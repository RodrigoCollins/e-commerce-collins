import React,{useContext} from 'react'
import { CartContext } from '../../context/cartcontext'
import {Link} from 'react-router-dom'
import './Cart.css'
import CartItem from './CartItem'

const CartContainer = () => {
  const {cart, clearCart, getTotal} = useContext(CartContext);
  
    
  if (cart.length === 0) {
    return (
      <section className='cart'>
        <header>
          <h2>your cart</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
        <Link to="/" className="btn">Continue Shopping</Link>
      </section>
    )
  }

  return (
    <div>
      <h2>your cart</h2>
    <div>
    {cart.map(item => (
       <CartItem 
        img={item.item.img}
        stock={item.quantity}
        desc={item.item.desc}
        key={item.item.id}
        price={item.item.price}
      />
      ))}
      <hr/>
    </div>
    <div className='cart-total'>
          <h4>
            total <span>${getTotal()}</span>
          </h4>
        </div>
    <button type='button' onClick={clearCart} className='btn clear-btn'>Clear Cart</button> 
    <Link className="btn" to="/">Continue Shopping</Link>
    </div>
  );
}

export default CartContainer
