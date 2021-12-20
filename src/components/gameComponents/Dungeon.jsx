import React from 'react'
import '../css/Dungeon.css'
import { bossDeck } from "../../assets/cards"


function Dungeon() {

  console.log(bossDeck);
    return (
        <div className='dungeonBody'>

            {/* -- HERO AREA -- */}
            <div className='heroDisplay'>
                    <img src="/card-images/heroes/cleric-ordinary(6).svg" className='hero'></img>
            </div>

            {/* -- DUNGEON AREA -- */}
            <div className='dungeonDisplay'>
                <div className='roomArea'>
                    <img src="" className='room'></img>
                    <img src="" className='room'></img>
                    <img src="" className='room'></img>
                    <img src="" className='room'></img>
                    <img src="" className='room'></img>
                    <img src="" className='room'></img>
                </div>
                <div className='bossArea'>
                    <img src="" className='boss'></img>
                </div>
            </div>
        </div>
    )
}

export default Dungeon
