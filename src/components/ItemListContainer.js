import React from 'react'
import Audio from './Audio'



const ItemListContainer = (props) => {

    return (
        
        <div className='banner'>
           
            <h1>{props.greeting}</h1>
            <Audio/>
            
        </div>
    )
}

export default ItemListContainer


