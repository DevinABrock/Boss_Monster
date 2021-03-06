import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import '../css/Event.css'

function Event() {
    const health = useSelector(state => state.playerStats.health)
    const souls = useSelector(state => state.playerStats.souls)
    const builds = useSelector(state => state.playerStats.buildActions)
    const gameRound = useSelector(state => state.gamePhase.gameRound)

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

            {/* -- BUILDS -- */}
            <div className='souls'>
                Builds:
                <div className='soul'>{builds}</div>
            </div>
            <div className='rounds'>
                Round:
                <div className='round'>{gameRound}</div>
            </div>
        </div>
    )
}

export default Event
