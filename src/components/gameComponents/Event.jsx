import React from 'react'
import '../css/Event.css'
import heart from '../../images/heart.png'

function Event() {
    return (
        <div className='eventBody'>
            {/* -- HEARTS -- */}
            <div className='health'>
                HP:
                <img src={heart} className='heart'></img>
                <img src={heart} className='heart'></img>
                <img src={heart} className='heart'></img>
                <img src={heart} className='heart'></img>
                <img src={heart} className='heart'></img>
            </div>

            {/* -- SOULS -- */}
            <div className='souls'>
                Souls:
                <div className='soul'>3</div>
            </div>
        </div>
    )
}

export default Event
