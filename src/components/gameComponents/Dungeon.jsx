import React from 'react'
import '../css/Dungeon.css'
import { bossDeck, heroDeck } from "../../assets/cards"
import { useSelector } from 'react-redux';
import Card from './Card'

function Dungeon() {

    const playerDungeon = useSelector(state => state.cardDecks.playerDungeon)
    const buildingMode = useSelector(state => state.misc.buildingMode)
    const selectedCard = useSelector(state => state.misc.card)
    const selectedCardClass = useSelector(state => state.misc.className)

    const handleBuild = (cardObj, className) => {

        if(className === "handCard"){
            dispatch(buildDungeon(cardObj))
        }
        else{
            alert("You can only build cards from your hand.")
        }

        // keeps players from building the same repeatedly
        dispatch(selectCard(cardObj, "builtRoom"))
    }

    return (
        <div className='dungeonBody'>

            {/* -- HERO AREA -- */}
            <div className='heroDisplay' >
                <Card cardObj={heroDeck[10]} className="hero"/>
            </div>
            {/* -- DUNGEON AREA -- */}
            <div className='dungeonDisplay'>
                <div  className={buildingMode ? 'roomAreaBuilding' : 'roomArea'} onClick={()=>handleBuild(selectedCard, selectedCardClass)}>
                    {playerDungeon && playerDungeon.map((roomCard, index)=>{
                            return <Card cardObj={roomCard[0]} className="room" key={index}/>
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
