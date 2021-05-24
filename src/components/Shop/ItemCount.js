import React, {useContext,  useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './ItemCount.css'
import { Link } from 'react-router-dom';
import {CartContext} from '../../context/cartcontext'


const ItemCount = (item) => {

const [value, setValue] = useState(1)
const {addToCart} = useContext(CartContext)



   const plus = () => {
   if(value < item.stock){
    setValue(value + 1)
    
   }
  }
  const less = () =>{
    if(value > 1){
    setValue(value - 1)
    
    }
  }



 return (
    <>
    <main>
        <div className="container">       
            <div className="button-container">
                <button className="btn decrease" onClick={less}>-</button>
                <span className="value">{value}</span>
                <button className="btn increase" onClick={plus}>+</button>
                <Link to="/cart" >
                  <button onClick={() => addToCart(item, value)} className="btn btn-add">Add <FontAwesomeIcon icon={faCartPlus} /></button>
                    
                </Link> 
                <Link className="btn btn-back" to="/">Back to Shop</Link>
            </div>
        </div>
    </main>
      
    </>
  );
};

export default ItemCount;
