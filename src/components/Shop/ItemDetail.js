import React, { useContext, useEffect, useState } from 'react'
import {products} from './ItemsData'
import {useParams} from 'react-router-dom'
import ItemCount from './ItemCount'
import './ItemDetail.css'
import { CartContext } from '../../context/cartcontext'




const ItemDetail = (product) => {
    const [item, setItem] = useState('')
    const {id} = useParams();
    const {addToCart} = useContext(CartContext)

    useEffect(() =>{
    const newItem = products.find((item)=>item.id === parseInt(id));
    setItem(newItem)
    },[id])
    console.log(item)

    return (
    <div className='detail-container' >
        <div className="img-container">
        <img style={{width:700}}src={item.img} alt={item.desc}/>
        </div>
        <div className="desc-container">
                <article className='item-desc'>
                    {item.desc}
                </article>
                <p className="complete-desc">
                  {item.complete}
                </p>
                <ItemCount stock={item.stock} onAdd={() => addToCart(product)} />
                <div className='details-header'>Details:</div>
                <div className="details-text">{item.details}</div>
               
                
        </div>
    </div>
    )
}

export default ItemDetail
