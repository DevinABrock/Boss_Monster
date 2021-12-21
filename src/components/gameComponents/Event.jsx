import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import '../css/Event.css'

function Event() {
    const health = useSelector(state => state.playerStats.health)
    const souls = useSelector(state => state.playerStats.souls)

    

    return (
        <div className='eventBody'>
            {/* -- HEARTS -- */}
            <div className='health'>
                HP:
                {Array.from(Array(health), (e, i) => {
                    return <img src='/heart.png' className='heart' key={i}></img>
                })}
                {/* <img src='/heart.png' className='heart'></img> */}
            </div>

            {/* -- SOULS -- */}
            <div className='souls'>
                Souls:
                <div className='soul'>{souls}</div>
            </div>
        </div>
    )
}

export default Event
