import React from 'react'
import '../css/Dungeon.css'
import { bossDeck } from "../../assets/cards"
import { useSelector, useDispatch } from 'react-redux';
import { selectCard, buildingMode } from '../../actions/miscActions';
import { buildDungeon } from '../../actions/sampleActions';
import Card from './Card'
import { cardBack } from '../../assets/cards';

function Dungeon() {

    const dispatch = useDispatch()

    const playerDungeon = useSelector(state => state.cardDecks.playerDungeon)
    const heroesAtStartOfDungeon = useSelector(state => state.cardDecks.heroesAtStartOfDungeon)
    const heroRoomPosition = useSelector(state => state.heroStats.heroRoomPosition)
    const buildingModeState = useSelector(state => state.misc.buildingMode)
    const selectedCard = useSelector(state => state.misc.card)
    const playerBoss = useSelector(state => state.cardDecks.playerBoss)

    console.log("heroRoomPosition", heroRoomPosition);

    console.log("playerDungeon", playerDungeon);

    const renderHeroAtPosition = () => {
        // return [<Card cardObj={heroesAtStartOfDungeon[0]} className="hero"/>,<Card cardObj={heroesAtStartOfDungeon[0]} className="hero"/>]
        let renderHeroArray = []
        for (let roomIndex = 5; roomIndex >= 0; roomIndex--) {
            if (heroRoomPosition===roomIndex) {
                renderHeroArray.push(<Card cardObj={heroesAtStartOfDungeon[0]} className="hero"/>)
            }
            else{
                renderHeroArray.push(<Card cardObj={cardBack} className="hero hero_blank"/>)
            }
        }
        return renderHeroArray;
    }

    const handleBuild = (e) => {

        console.log("e.target", e.target);
        console.log("e.target.alt", e.target.alt);

        // Checks if the selected card is an Advanced Trap Room
        if(selectedCard.subtitle === "Advanced Trap Room"){
            if(e.target.alt === "Trap Room" || e.target.alt === "Advanced Trap Room"){
                dispatch(buildDungeon(selectedCard, e.target.id))
            
                // keeps players from building the same repeatedly
                dispatch(selectCard(selectedCard, "builtRoom"))
    
                // turns buildingMode off after building room
                dispatch(buildingMode())
            }
            else{
                alert("Advanced Trap Rooms can only be built on ordinary or Advanced Trap Rooms.")
                // turns buildingMode off
                dispatch(buildingMode())
            }
        }
        // Checks if the selected card is an Advanced Monster Room
        else if(selectedCard.subtitle === "Advanced Monster Room"){
            if(e.target.name === "Neanderthal Cave"){
                alert("Advanced Monster Rooms cannot be built on the Neanderthal Cave.")
                dispatch(buildingMode())
            }
            else if(e.target.alt === "Monster Room" || e.target.alt === "Advanced Monster Room"){
                dispatch(buildDungeon(selectedCard, e.target.id))
            
                // keeps players from building the same repeatedly
                dispatch(selectCard(selectedCard, "builtRoom"))
    
                // turns buildingMode off after building room
                dispatch(buildingMode())
            }
            else{
                alert("Advanced Monster Rooms can only be built on ordinary or Advanced Monster Rooms.")
                // turns buildingMode off
                dispatch(buildingMode())
            }
        }
        else if(buildingModeState){
            dispatch(buildDungeon(selectedCard, e.target.id))
            
            // keeps players from building the same repeatedly
            dispatch(selectCard(selectedCard, "builtRoom"))

            // turns buildingMode off after building room
            dispatch(buildingMode())
        }
    }

    return (
        <div className='dungeonBody'>
            {/* -- HERO AREA -- */}
            <div className='heroDisplay' >
                {heroesAtStartOfDungeon.length ? 
                renderHeroAtPosition()
                // <Card cardObj={heroesAtStartOfDungeon[0]} className="hero"/>
                :null}
            </div>
            {/* -- DUNGEON AREA -- */}
            <div className='dungeonDisplay'>
                <div  className={buildingModeState ? 'roomAreaBuilding' : 'roomArea'} onClick={(e)=>handleBuild(e)}>
                    // 
                    {playerDungeon.slice(0).reverse().map((roomCard, index)=>{
                            return <Card cardObj={roomCard[0]} className="room" key={index}/>
                        })
                    }
                </div>
                <div className='bossArea'>
                <Card cardObj={playerBoss} className="boss"/>
                </div>
            </div>
        </div>
    )
}

export default Dungeon
