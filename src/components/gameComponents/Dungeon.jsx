import React from 'react'
import '../css/Dungeon.css'
import Drac from '../../images/card-images/bosses/draculord.svg'


function Dungeon() {
    return (
        <div className='dungeonBody'>

            {/* -- HERO AREA -- */}
            <div className='heroDisplay'>
                    <img src={Drac} className='hero'></img>
            </div>

            {/* -- DUNGEON AREA -- */}
            <div className='dungeonDisplay'>
                <div className='roomArea'>
                    <img src={Drac} className='room'></img>
                    <img src={Drac} className='room'></img>
                    <img src={Drac} className='room'></img>
                    <img src={Drac} className='room'></img>
                    <img src={Drac} className='room'></img>
                    <img src={Drac} className='room'></img>
                </div>
                <div className='bossArea'>
                    <img src={Drac} className='boss'></img>
                </div>
            </div>
        </div>
    )
}

export default Dungeon
