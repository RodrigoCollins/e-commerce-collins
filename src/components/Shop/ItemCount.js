import React, {useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './ItemCount.css'
import { Link } from 'react-router-dom';
import {CartContext} from '../../context/cartcontext'


const ItemCount = (props) => {

const {addToCart} = useContext(CartContext)
const {plus} = useContext(CartContext)
const {less} = useContext(CartContext)
const {value} = useContext(CartContext)


 return (
    <>
    <main>
        <div class="container">       
            <div className="button-container">
                <button className="btn decrease" onClick={less}>-</button>
                <span className="value">{value}</span>
                <button className="btn increase" onClick={plus}>+</button>
                <Link to="/cart" className="btn-add" onClick={addToCart}>
                    Add <FontAwesomeIcon icon={faCartPlus} />
                </Link> 
                <Link className="btn-back" to="/">Back to Shop</Link>
            </div>
        </div>
    </main>
      
    </>
  );
};

export default ItemCount;
