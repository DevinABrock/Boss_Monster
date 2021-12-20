import React from 'react'
import '../css/Event.css'

function Event() {
    return (
        <div className='eventBody'>
            {/* -- HEARTS -- */}
            <div className='health'>
                HP:
                <img src='/heart.png' className='heart'></img>
                <img src='/heart.png' className='heart'></img>
                <img src='/heart.png' className='heart'></img>
                <img src='/heart.png' className='heart'></img>
                <img src='/heart.png' className='heart'></img>
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
