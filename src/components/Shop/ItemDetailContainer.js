import React from 'react';
import ItemDetail from './ItemDetail';
import './ItemDetailContainer.css'




const ItemDetailContainer = () => {


    return ( 
        <>
          <div className='shop-detail'>
            <div className="detail">
              <ItemDetail/>
            </div>

          </div>    
        </>
    )
}

export default ItemDetailContainer
