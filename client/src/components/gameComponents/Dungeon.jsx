import React, { useState, useEffect } from 'react'
import '../css/Dungeon.css'
// import { bossDeck } from "../../assets/cards"
import { useSelector, useDispatch } from 'react-redux';
import { selectCard, buildingMode } from '../../actions/miscActions';
import { buildDungeon, addBuildActions, changeUseButtonSwapping, swapRooms, changeSwapRoomsMode, dealRoomCard, changeShowDiscardPile, drawFromDiscard } from '../../actions/sampleActions';
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
    const discardPile = useSelector(state => state.cardDecks.discardPile)

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
        // console.log("e.target", e.target);
        // console.log("e.target.className", e.target.className);

        // if the state is in swapping mode and the user clicks to swap
        if(swapRoomsMode && e.target.className==="room" && selectedCardClass==='room'){
            // console.log('swapping rooms');
            // console.log(e.target);
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
                let monsterCardsInDiscard = false
                discardPile.forEach(cardObj => {
                    if(cardObj.subtitle.includes("Monster")){
                        monsterCardsInDiscard = true
                    }
                })

                if(selectedCard.name === "Monstrous Monument" && !monsterCardsInDiscard){
                    let doNoDrawCard = window.confirm("There are currently no Monster Room cards in the discard pile. Playing this card will not activate it's ability.")
                    if(doNoDrawCard){
                        // passiveAbilities is not being run since player does not want to draw a card
                        dispatch(buildDungeon(selectedCard, e.target.id))
                        dispatch(addBuildActions(-1)) // decreasing buildActions by 1
                        
                        // keeps players from building the same repeatedly
                        dispatch(selectCard(selectedCard, "builtRoom"))
    
                        // turns buildingMode off after building room
                        dispatch(buildingMode())
                    }
                }
                else{
                    passiveAbilities(selectedCard.name)
                    dispatch(buildDungeon(selectedCard, e.target.id))
                    dispatch(addBuildActions(-1)) // decreasing buildActions by 1
                    
                    // keeps players from building the same repeatedly
                    dispatch(selectCard(selectedCard, "builtRoom"))

                    // turns buildingMode off after building room
                    dispatch(buildingMode())
                }

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
                // When you build this room, you can draw a "Monster Room" card from the discard pile.
            case "Monstrous Monument":
                dispatch(changeShowDiscardPile("Monster Room"))
                alert('Building the "Monstrous Monument" card allows you to select a Monster Card from the discard pile and put it in your hand. Select an appropriate card below and click the "USE" button to add it to your hand.')
                break
            // "When you build this room, you may swap the placement of two Rooms in any one dungeon."
                break
            case "Centipede Tunnel":
                let userWantsToSwapRooms = window.confirm("The Centipede Tunnel allows you to swap the placement of two Rooms in your dungeon. Click OK if you want to swap rooms or cancel if not.")
                if(userWantsToSwapRooms){
                    dispatch(changeUseButtonSwapping())
                    alert('To swap rooms, select the first room you want to swap by clicking it. Next, click the "USE" button and then select a second room to swap them.')
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
                            return (
                                <div className="room2">
                                    <Card cardObj={roomCard[0]} className={roomCard.length > 1 ? "roomStack" : "room"} key={index}/>
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
