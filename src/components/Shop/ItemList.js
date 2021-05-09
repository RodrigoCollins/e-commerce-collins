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
            {items.length > 0 && items.map((product) => {
              const {id, img, desc, price, stock} = product;
              return (
              <Link to={`/itemdetail/${product.id}`} key={id} >
                <Items img={img} desc={desc} price={price} stock={stock}/>
              </Link>
              
              )})}
          </div>    
        </>
    )}


export default ItemList
