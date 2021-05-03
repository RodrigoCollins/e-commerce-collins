import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './ItemCount.css'


const ItemCount = (props) => {
  const [value, setValue] = useState(1);
  const [stock, setStock] = useState(props.stock - 1);

 const onAdd = () => {
   if(value < stock || value < props.stock){
    setValue(value + 1)
    setStock(stock-1)
   }
  }
  const onSubs = () =>{
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
                <button className="btn decrease" onClick={onSubs}>-</button>
                <span className="value">{value}</span>
                <button className="btn increase" onClick={onAdd}>+</button>
                <button className="btn">
                    Add <FontAwesomeIcon icon={faCartPlus} />
                </button> 
            </div>
        </div>
    </main>
      
    </>
  );
};

export default ItemCount;
