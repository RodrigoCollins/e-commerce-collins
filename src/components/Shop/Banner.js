import React from 'react'
import Audio from './Audio'
import './Banner.css'



const Banner = (props) => {

    return (
        
        <div className='banner'>
           
            <h1>{props.greeting}</h1>
            <Audio/>
            
        </div>
    )
}

export default Banner


