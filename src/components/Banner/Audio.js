import React from 'react'
import jcsong from './jcsong.mp3'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons'

const Audio = () => {
    const handleClick = () =>{
        const audio = document.getElementsByClassName("audio")[0]
        audio.play()
    }
     return (
        <div>
            <button className="btn-audio" onClick={handleClick}>Sound On <FontAwesomeIcon icon={faVolumeUp}/></button>
            <audio src={jcsong} className='audio'/>
        </div>
    )
}

export default Audio

