import React from 'react'
import '../css/Dungeon.css'
import { epicHeroDeck } from "../../assets/cards"
import Card from './Card'

function Dungeon() {

    console.log(epicHeroDeck);

    return (
        <div className='dungeonBody'>

            {/* -- HERO AREA -- */}
            <Card cardObj={epicHeroDeck[0]} className="hero"/>
            {/* <div className='heroDisplay' >
                    <img src={epicHeroDeck[7].image} className='hero' onClick={()=>dispatch(selectCard(epicHeroDeck[7]))}/>
            </div> */}
            {/* -- DUNGEON AREA -- */}
            <div className='dungeonDisplay'>
                <div className='roomArea'>
                    <img src='/card-images/heroes/cleric-ordinary(6).svg' className='room'/>
                    <img src='/card-images/heroes/cleric-ordinary(6).svg' className='room'/>
                    <img src='/card-images/heroes/cleric-ordinary(6).svg' className='room'/>
                    <img src='/card-images/heroes/cleric-ordinary(6).svg' className='room'/>
                    <img src='/card-images/heroes/cleric-ordinary(6).svg' className='room'/>
                    <img src='/card-images/heroes/cleric-ordinary(6).svg' className='room'/>
                </div>
                <div className='bossArea'>
                    <img src='/card-images/heroes/cleric-ordinary(6).svg' className='boss'/>
                </div>
            </div>
        </div>
    )
}

export default Dungeon
