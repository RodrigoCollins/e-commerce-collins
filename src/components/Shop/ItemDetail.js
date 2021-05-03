import React, { useEffect, useState } from 'react'
import {products} from './ItemsData'
import {useParams} from 'react-router-dom'
import Items from './Items'
import ItemCount from './ItemCount'

const ItemDetail = () => {
    const [item, setItem] = useState('')
    const {id} = useParams();

    useEffect(() =>{
    const newItem = products.find((item)=>item.id === parseInt(id));
    setItem(newItem)
    },[])
    console.log(item)

    return (
    <div className='detail-container' >
        <Items key={id} img={item.img} desc={item.desc} price={item.price} stock={item.stock}/>
        <ItemCount stock='5'/>
    </div>
    )
}

export default ItemDetail
