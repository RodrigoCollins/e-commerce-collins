import React,{useContext} from 'react'
import { CartContext } from '../../context/cartcontext'
import {Link} from 'react-router-dom'
import './Cart.css'
import CartItem from './CartItem'
import {getFirestore} from '../../firebase'

const CartContainer = () => {
  const {cart, clearCart, getTotal} = useContext(CartContext);

   const isInStock = (stock,quantity) => {
     return stock >= quantity
   }
  
   const handleFinish = () => {
     const db = getFirestore()
     const batch = db.batch()

     cart.forEach((item) => {
       const itemRef = db.collection('items').doc(item)
       if(isInStock(item.stock, item.quantity)){
         batch.update(itemRef, {stock : item.stock - item.quantity})
       }else{
        alert(`${item.desc} not in stock anymore`)
       }
    })

     batch.commit()
 }
    
  if (cart.length === 0) {
    return (
      <section className='cart'>
        <header>
          <h2>your cart</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
        <Link to="/" className="btn">lets change that</Link>
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
        quantity={item.quantity}
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
    <button className="btn ok-btn" onClick={handleFinish}>Checkout</button>
    </div>
  );
}

export default CartContainer
