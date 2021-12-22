import React from 'react'
import '../css/Dungeon.css'
import { bossDeck, heroDeck } from "../../assets/cards"
import { useSelector, useDispatch } from 'react-redux';
import { selectCard, buildingMode } from '../../actions/miscActions';
import { buildDungeon } from '../../actions/sampleActions';
import Card from './Card'

function Dungeon() {

    const dispatch = useDispatch()

    const playerDungeon = useSelector(state => state.cardDecks.playerDungeon)
    const buildingModeState = useSelector(state => state.misc.buildingMode)
    const selectedCard = useSelector(state => state.misc.card)


    const handleBuild = (cardObj) => {

        if(buildingModeState){
            dispatch(buildDungeon(cardObj))
            
            // keeps players from building the same repeatedly
            dispatch(selectCard(cardObj, "builtRoom"))

            // turns buildingMode off after building room
            dispatch(buildingMode())
        }
    }

    return (
        <div className='dungeonBody'>

            {/* -- HERO AREA -- */}
            <div className='heroDisplay' >
                <Card cardObj={heroDeck[10]} className="hero"/>
            </div>
            {/* -- DUNGEON AREA -- */}
            <div className='dungeonDisplay'>
                <div  className={buildingModeState ? 'roomAreaBuilding' : 'roomArea'} onClick={()=>handleBuild(selectedCard)}>
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
