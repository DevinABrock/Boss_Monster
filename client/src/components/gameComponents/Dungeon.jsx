import React, { useState, useEffect } from 'react'
import '../css/Dungeon.css'
// import { bossDeck } from "../../assets/cards"
import { useSelector, useDispatch } from 'react-redux';
import { selectCard, buildingMode } from '../../actions/miscActions';
import { buildDungeon, addBuildActions, changeUseButtonSwapping, swapRooms, changeSwapRoomsMode, dealRoomCard } from '../../actions/sampleActions';
import Card from './Card'
import { cardBack } from '../../assets/cards';

function Dungeon() {

    const dispatch = useDispatch()

    const playerDungeon = useSelector(state => state.cardDecks.playerDungeon)
    const heroesAtStartOfDungeon = useSelector(state => state.cardDecks.heroesAtStartOfDungeon)
    const heroRoomPosition = useSelector(state => state.heroStats.heroRoomPosition)
    const buildingModeState = useSelector(state => state.misc.buildingMode)
    const selectedCard = useSelector(state => state.misc.card)
    const selectedCardClass = useSelector(state => state.misc.className)
    const playerBoss = useSelector(state => state.cardDecks.playerBoss)
    const swapRoomsMode = useSelector(state => state.playerStats.swapRoomsMode)
    const gameRound = useSelector(state => state.gamePhase.gameRound)

    const [beastMenagerieFirstTime, setBeastMenagerieFirstTime] = useState(true)
    
    

    useEffect(() => {
        // resets value to true on gameRound change so Beast Menagerie room effect happens once per turn
        setBeastMenagerieFirstTime(true)
    }, [gameRound])


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
        console.log("e.target.className", e.target.className);

        // if the state is in swapping mode and the user clicks to swap
        if(swapRoomsMode && e.target.className==="room" && selectedCardClass==='room'){
            console.log('swapping rooms');
            console.log(e.target);
            dispatch(swapRooms(selectedCard.id, e.target.id))
            dispatch(changeSwapRoomsMode())
            dispatch(changeUseButtonSwapping())
        }
        
        // if the state is in building mode
        if(buildingModeState){
            // Checks if the selected card is an Advanced Trap Room
            if(selectedCard.subtitle === "Advanced Trap Room"){
                if(e.target.alt === "Trap Room" || e.target.alt === "Advanced Trap Room"){
                    passiveAbilities(selectedCard.name)
                    dispatch(buildDungeon(selectedCard, e.target.id))
                    dispatch(addBuildActions(-1)) // decreasing buildActions by 1
                
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
                    passiveAbilities(selectedCard.name)
                    beastMenagerieInDungeon()
                    dispatch(buildDungeon(selectedCard, e.target.id))
                    dispatch(addBuildActions(-1)) // decreasing buildActions by 1
                
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
            else if(buildingModeState && e.target.id !== ""){
                console.log("e.target.id", e.target.id);
                passiveAbilities(selectedCard.name)
                beastMenagerieInDungeon()
                dispatch(buildDungeon(selectedCard, e.target.id))
                dispatch(addBuildActions(-1)) // decreasing buildActions by 1
                
                // keeps players from building the same repeatedly
                dispatch(selectCard(selectedCard, "builtRoom"))

                // turns buildingMode off after building room
                dispatch(buildingMode())
            }
        }
    }

    const passiveAbilities = (cardName) => {
        // putting Beast Menagerie function here since it is a passive ability
        beastMenagerieInDungeon()
        switch(cardName){
            // "When you build this room, you may immediately build an additional Room."
            case "Construction Zone":
                dispatch(addBuildActions(1))
                break
            // "When you build this room, you may swap the placement of two Rooms in any one dungeon."
            case "Centipede Tunnel":
                let userWantsToSwapRooms = window.confirm("The Centipede Tunnel allows you to swap the placement of two Rooms in any one dungeon. Click OK to confirm and swap rooms by: selecting a room by clicking, clicking the use button, then selecting the room to swap with. Click OK if you want to swap rooms or cancel if not.")
                if(userWantsToSwapRooms){
                    dispatch(changeUseButtonSwapping())
                }
                break
            default:
                return
        }
    }

    const beastMenagerieInDungeon = () => {

        let hasBeastMenagerie = false

        playerDungeon.forEach(cardArr => {
            if(cardArr[0].name === "Beast Menagerie"){
                hasBeastMenagerie = true
            }
        })
        if(beastMenagerieFirstTime && hasBeastMenagerie && (selectedCard.subtitle === "Monster Room" || selectedCard.subtitle === "Advanced Monster Room")){
            dispatch(dealRoomCard())
            setBeastMenagerieFirstTime(false)
        }
    }

    console.log("playerDungeon", playerDungeon);


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
                    {/* using .slice(0).reverse().map() reverses the order in which the cards are being displayed */}
                    {playerDungeon.slice(0).reverse().map((roomCard, index)=>{
                        console.log("roomCard", roomCard);
                            return (
                                <div className="room2">
                                    <Card cardObj={roomCard[0]} className="room" key={index}/>
                                    {roomCard[0].durability && <span>{roomCard[0].durability}/100</span>}
                                </div>
                            )
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
