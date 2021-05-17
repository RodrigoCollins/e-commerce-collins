import React, { useEffect, useState } from 'react';
import {Items} from './Items'
import './ItemList.css'
import {Link} from 'react-router-dom'
import {getFirestore} from '../../firebase'





export const ItemList = () => {
    
   const [items, setItems] = useState([])
    

    useEffect(
      () =>{
        const db = getFirestore()
        const items = db.collection("items")

        items
        .get()
        .then((snapshot) => {
          const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
          }))
          setItems(data)
        })
      
      }, [])
    
      
       
    return (
        <>
            <div className='shoplist'>
            {items.map((item) => {
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
