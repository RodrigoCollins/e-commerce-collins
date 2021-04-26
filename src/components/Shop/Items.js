import React from 'react'
import './Items.css'

export const Items = (props) => {
  return (
    <div className='section-center' >
      <article key={props.id} className='menu-item'> 
       <img src={props.img} alt={props.desc} className='photo'/>
       <div className='item-info'>
       <header>
       <p className='item-text'>{props.desc}</p>
       <h4 className="price">{props.price}</h4>
       </header>
       </div>
      </article>
    </div>
  )
}

export default Items
