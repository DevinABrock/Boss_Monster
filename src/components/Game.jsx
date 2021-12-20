import React from 'react'
import './css/game.css'
import Info from './gameComponents/Info'
import Hand from './gameComponents/Hand'
import Event from './gameComponents/Event'
import Town from './gameComponents/Town'
import Username from './gameComponents/Username'
import Dungeon from './gameComponents/Dungeon'

function Game() {
    return (
        <div className='gameBody'>

            {/* -- INFO SIDE -- */}
            <div className='infoSide'>
                <div className='usernameArea'>
                    <Username />
                </div>
                <div className='infoArea'>
                    <Info />
                </div>
            </div>

            {/* -- GAME SIDE -- */}
            <div className='gameSide'>
                <div className='progressionArea'>
                    <div className='eventArea'>
                        <Event />
                    </div>
                    <div className='townArea'>
                        <Town />
                    </div>
                </div>
                <div className='dungeonArea'>
                    <Dungeon />
                </div>
                <div className='handArea'>
                    <Hand />
                </div>
            </div>
        </div>
    )
}

export default Game
