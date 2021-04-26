import React from 'react'
import jcsong from './jcsong.mp3'
import './Banner.css'

const Audio = () => {
    
     return (
        <div>
            
            <audio src={jcsong} className='audio' controls/>
        </div>
    )
}

export default Audio

