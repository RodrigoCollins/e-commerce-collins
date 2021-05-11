import React, { useState } from 'react';
import {products} from './ItemsData'
import {Items} from './Items'
import './ItemList.css'
import {Link} from 'react-router-dom'




const ItemList = () => {
    const [items] = useState(products)
    
      
       
    return (
        <>
            <div className='shoplist'>
            {items.length > 0 && items.map((item) => {
              const {id, img, desc, price, stock} = item;
              return (
              <Link to={`/itemdetail/${item.id}`} key={id} >
                <Items img={img} desc={desc} price={price} stock={stock}/>
              </Link>
              
              )})}
          </div>    
        </>
    )}


export default ItemList
