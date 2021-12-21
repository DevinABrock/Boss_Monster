import React from 'react'
import '../css/Dungeon.css'
import { bossDeck, roomDeck, heroDeck } from "../../assets/cards"
import { useSelector } from 'react-redux';
import Card from './Card'

function Dungeon() {

    const playerDungeon = useSelector(state => state.cardDecks.playerDungeon)

    console.log(playerDungeon);

    return (
        <div className='dungeonBody'>

            {/* -- HERO AREA -- */}
            <div className='heroDisplay' >
                <Card cardObj={heroDeck[10]} className="hero"/>
            </div>
            {/* -- DUNGEON AREA -- */}
            <div className='dungeonDisplay'>
                <div className='roomArea'>
                    {playerDungeon && playerDungeon.map(roomCard=>{
                            return <Card cardObj={roomCard} className="room"/>
                        })
                    }
                </div>
                <div className='bossArea'>
                <Card cardObj={bossDeck[0]} className="boss"/>
                </div>
            </div>
        </div>
    )
}

export default Dungeon
