import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import ItemCount from './ItemCount'
import './ItemDetail.css'
import {getFirestore} from '../../firebase'






const ItemDetail = () => {
    const [item, setItem] = useState('')
    const {id} = useParams();

    useEffect(() =>{
    const db = getFirestore()
    const items = db.collection("items")
    const newItem = items.doc(id)
    newItem.get().then((doc) =>{
    const data = {id:doc.id, ...doc.data()}
    setItem(data)
    })
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
                <div className="detail-price">${item.price}</div>
                <p className="complete-desc">
                {item.complete}
                </p>
                
                <ItemCount 
                 stock={item.stock}
                 img={item.img} 
                 desc={item.desc} 
                 complete={item.complete}
                 details={item.details}
                 price={item.price}
                 category={item.category}
                 id={item.id}
                />
                
                <div className='details-header'>Details:</div>
                <div className="details-text">{item.details}</div>
               
                
        </div>
    </div>
    )
}

export default ItemDetail
