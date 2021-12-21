import React from 'react'
import '../css/Dungeon.css'
import { bossDeck, roomDeck, heroDeck } from "../../assets/cards"
import Card from './Card'

function Dungeon() {

    return (
        <div className='dungeonBody'>

            {/* -- HERO AREA -- */}
            <div className='heroDisplay' >
                <Card cardObj={heroDeck[10]} className="hero"/>
            </div>
            {/* -- DUNGEON AREA -- */}
            <div className='dungeonDisplay'>
                <div className='roomArea'>
                    <Card cardObj={roomDeck[4]} className="room"/>
                    <Card cardObj={roomDeck[35]} className="room"/>
                    <Card cardObj={roomDeck[10]} className="room"/>
                    <Card cardObj={roomDeck[24]} className="room"/>
                    <Card cardObj={roomDeck[40]} className="room"/>
                    <Card cardObj={roomDeck[23]} className="room"/>
                </div>
                <div className='bossArea'>
                <Card cardObj={bossDeck[0]} className="boss"/>
                </div>
            </div>
        </div>
    )
}

export default Dungeon
