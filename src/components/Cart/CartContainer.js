import React,{useContext, useState} from 'react'
import { CartContext } from '../../context/cartcontext'
import {Link} from 'react-router-dom'
import './Cart.css'
import CartItem from './CartItem'
import {getFirestore} from '../../firebase'
import firebase from 'firebase'
import 'firebase/firestore' 


const CartContainer = () => {
  const {cart, clearCart, getTotal} = useContext(CartContext);
  const [orderId, setOrderId] = useState('');
  const [show, setShow] = useState(false)
  const [inputValues, setInputValues] = useState({
    user:'',
    phone:'',
    email:''
  });

  const [error, setError] = useState(false);
  const { user, phone, email } = inputValues;

  const renderDivs = [
    {
      id:1,
      label: 'Name:',
      name: 'user',
      value: user
    },
    {
      id:2,
      label: 'Phone:',
      name: 'phone',
      value: phone
    },
    {
      id:3,
      label: 'Email:',
      name: 'email',
      value: email
    }
  ]

  const handleChange = ({target: { name, value }}) => setInputValues({ ...inputValues, [name]: value });
  
  const handleBlur = ({target: { name, value }}) => setInputValues({ ...inputValues, [name]: value.trim() });
  

  const newOrder = (e) => {
    
    e.preventDefault();
      if([user, phone, email].includes('')) {
      setError(true);
      return;
    }
    const db = getFirestore()
    db.collection('orders').add(
      {
        buyer: {
          user ,
          phone ,
          email
        },
        items : cart,
        date : firebase.firestore.Timestamp.fromDate(new Date()),
        total : getTotal(),
      }
    ).then(({id}) => {
      setOrderId(id)
      
    })

   setShow(true)

 
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
    <div className="cart-container">
      <h2 className="title-cart">your cart:</h2>
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
    <hr/>
    <h3>Complete Personal Info</h3>
          <form
        onSubmit={newOrder}
      >
        {renderDivs.map(div => (
          <div className='input-container' key={div.id}>
            <label >{div.label}</label>
            <input type="text" name={div.name} value={div.value} onChange={handleChange} onBlur={handleBlur}  />
          </div>
        ))}
          <button className="btn ok-btn"
            disabled={[user, phone, email].includes('')}
            type='submit'
          >
            Checkout
          </button>
      </form>
      {show && <h4>thanks {user} you order id is {orderId}</h4>}
      {error && <div className="div-error">HUBO UN ERROR</div>}
    </div>
  );
}

export default CartContainer
