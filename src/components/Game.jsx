import React from 'react'
import './css/Game.css'

function Game() {
    return (
        <div className='gameBody'>
            {/* -- DECK -- */}
            <div className='deckArea'>
                <div className=''></div>
                <div className=''></div>
            </div>
            {/* -- HAND -- */}
            <div className='playerArea'>
            </div>
        </div>
    )
}

export default Game
