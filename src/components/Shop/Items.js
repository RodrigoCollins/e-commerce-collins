import React from 'react'
import './Items.css'

export const Items = (props) => {
  return (
    <div className='section-center' >
      <article key={props.id} className='menu-item'> 
       <img src={props.img} alt={props.desc} className='photo'/>
       <div className='item-info'>
       <div>
       <p className='item-text'>{props.desc}{props.stock}</p>
       <h5 className="price">${props.price}</h5>

       </div>
       </div>
      </article>
    </div>
  )
}

export default Items

