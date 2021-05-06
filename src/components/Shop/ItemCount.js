import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './ItemCount.css'
import { Link } from 'react-router-dom';
import {CartContext} from '../../context/cartcontext'

const ItemCount = (props) => {
const [value, setValue] = useState(1);
const [stock, setStock] = useState(props.stock - 1);
const {addToCart} = useContext(CartContext)

 const plus = () => {
   if(value < stock || value < props.stock){
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
 return (
    <>
    <main>
        <div class="container">       
            <div className="button-container">
                <button className="btn decrease" onClick={less}>-</button>
                <span className="value">{value}</span>
                <button className="btn increase" onClick={plus}>+</button>
                <Link to="/cart" className="btn" onClick={addToCart}>
                    Add <FontAwesomeIcon icon={faCartPlus} />
                </Link> 
            </div>
        </div>
    </main>
      
    </>
  );
};

export default ItemCount;
