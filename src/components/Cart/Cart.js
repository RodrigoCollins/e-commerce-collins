import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/cartcontext'


const Cart = () => {
const {clearCart} = useContext(CartContext)



  return (
    <section className='cart'>
      
      <header>
        <h2>your bag</h2>
      </header>

      
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span></span>
          </h4>
        </div>
        <button className='btn clear-btn' onClick={clearCart}>
          clear cart
        </button>
      </footer>
      <Link to="/" className="btn">Continue Shopping</Link>
    </section>
    )
}

export default Cart
