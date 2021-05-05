import React, { useEffect, useState } from 'react'
import {products} from './ItemsData'
import {Link, useParams} from 'react-router-dom'
import Items from './Items'
import ItemCount from './ItemCount'


const ItemDetail = () => {
    const [item, setItem] = useState('')
    const {id} = useParams();

    useEffect(() =>{
    const newItem = products.find((item)=>item.id === parseInt(id));
    setItem(newItem)
    },[id])
    console.log(item)

    return (
    <div className='detail-container' >
        <Items key={id} img={item.img} desc={item.desc} price={item.price}/>
        <ItemCount stock={item.stock}/>
        <Link to="/" className="btn">Back to Shop</Link>
    </div>
    )
}

export default ItemDetail
