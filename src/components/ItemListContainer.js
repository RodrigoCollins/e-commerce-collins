import React from 'react'



const ItemListContainer = (props) => {

    return (
        
        <div className='banner'>
           
            <h1>{props.greeting}</h1>
            
        </div>
    )
}

export default ItemListContainer


//style={{ backgroundImage: `url(${bgimg})`, backgroundSize: 'auto'}}