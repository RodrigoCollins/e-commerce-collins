import React, { useState } from 'react';
import {products} from './ItemsData'
import {Items} from './Items'
import './ItemList.css'

const ItemList = () => {
    const [items, setItems] = useState([''])
  
    const handleClick = async (items) => {
        console.log(products)
        setTimeout (() => {
            setItems(products)

        },2000)

    }
    
    return (
        <>
            <button className='btn-shop' onClick={handleClick}>Shop</button>
            <div className='shoplist'>
            {items.length > 0 && items.map((product) => {
              const {id, img, desc, price} = product;
              return (
              <Items id={id} img={img} desc={desc} price={price}/>
              )})}
          </div>    
        </>
    )
}

export default ItemList
