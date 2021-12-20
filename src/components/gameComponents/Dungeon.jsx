import React from 'react'
import '../css/Dungeon.css'
import { epicHeroDeck } from "../../assets/cards"


function Dungeon() {

    return (
        <div className='dungeonBody'>

            {/* -- HERO AREA -- */}
            <div className='heroDisplay'>
                    <img src={epicHeroDeck[7].image} className='hero'></img>
            </div>
            {/* -- DUNGEON AREA -- */}
            <div className='dungeonDisplay'>
                <div className='roomArea'>
                    <img src='/card-images/heroes/cleric-ordinary(6).svg' className='room'></img>
                    <img src='/card-images/heroes/cleric-ordinary(6).svg' className='room'></img>
                    <img src='/card-images/heroes/cleric-ordinary(6).svg' className='room'></img>
                    <img src='/card-images/heroes/cleric-ordinary(6).svg' className='room'></img>
                    <img src='/card-images/heroes/cleric-ordinary(6).svg' className='room'></img>
                    <img src='/card-images/heroes/cleric-ordinary(6).svg' className='room'></img>
                </div>
                <div className='bossArea'>
                    <img src='/card-images/heroes/cleric-ordinary(6).svg' className='boss'></img>
                </div>
            </div>
        </div>
    )
}

export default Dungeon
