import React from 'react'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'

const Cart = (props) => {
 


  return (
    <section className='cart'>
      
      <header>
        <h2>your bag</h2>
      </header>
     
      <div>
        
      <CartItem img={props.img} desc={props.desc} />
       
      </div>
      
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span></span>
          </h4>
        </div>
        <button className='btn clear-btn'>
          clear cart
        </button>
      </footer>
      <Link to="/" className="btn">Continue Shopping</Link>
    </section>
    )
}

export default Cart
