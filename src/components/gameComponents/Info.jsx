import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../css/Info.css'
import { nextGamePhase, dealHeroesToTown, dealRoomCard } from '../../actions/sampleActions';
import { diceRoll } from '../gameLogic/diceRoll';


function Info() {

    const dispatch = useDispatch();

    const gamePhase = useSelector(state => state.gamePhase.gamePhase)
    const gameRound = useSelector(state => state.gamePhase.gameRound)
    const playerRooms = useSelector(state => state.cardDecks.playerRooms)

    const [switchRanThisGamePhase, setSwitchRanThisGamePhase] = useState(false);
    
    const selectedCard = useSelector(state => state.misc.card)


    const handleChangeGamePhase = () => {
        // if 1 and player has rooms in their hand
        console.log(gamePhase, playerRooms.length);
        if(gamePhase===1 && playerRooms.length){
            dispatch(nextGamePhase())
        }
        // if 2 and user clicks next this will update whether a spell card takes effect for the round
        if(gamePhase===2){
            dispatch(nextGamePhase())
        }
        // if 3
        if(gamePhase===3){
            dispatch(dealHeroesToTown('ordinary', 2))
            dispatch(nextGamePhase())
        }
        // if 4
        if(gamePhase===4){
            dispatch(dealRoomCard())
            dispatch(nextGamePhase())
        }
    }

    const renderMessageSwitch = (gamePhase) => {
        console.log('running switch');
            switch (gamePhase) {
                case 1:
                    return <div className='messageBox'><div className='message'>You were dealt 5 Room cards and 1 Boss Card.</div></div>
                case 2:
                    
                    return <div className='messageBox'><div className='message'>This is the start of round {gameRound}.</div></div>
                case 3:
                    
                    let {rollNumber, isHit} = diceRoll(gameRound);
                    
                    return <div className='messageBox'>
                        <div className='message'>Rolling a dice to see if you are hit by spell!</div>
                        <div className='message'>Dice Result: {rollNumber}</div>
                        {isHit? <div className='message'>You are Hit!</div>: <div className='message'>You manage to avoid the spell!</div>}
                        </div>
                case 4:
                    return <div className='messageBox'><div className='message'>Adventurers wandering into Town.</div></div>
                case 5:
                    console.log('running case 5');
                    return <div className='messageBox'><div className='message'>You were dealt one Room Card.</div><div className='message'>You can build one Room in your dungeon.</div></div>
                    
                default:
                    break;
            }
    }
    const renderGamePhaseSwitch = (gamePhase) => {
        switch (gamePhase) {
            case 1:
                return `Pre-Game ${gamePhase}`
            case 2:
                return `Beginning of Round ${gamePhase}`
            case 3:
                return `Dice-Roll ${gamePhase}`
            case 4:
                return `Dealing Heroes ${gamePhase}`
            case 5:
                return `Build Room ${gamePhase}`
            default:
                break;
        }
    }

    const handleNextButtonClick = () => {
        
        handleChangeGamePhase();
        setSwitchRanThisGamePhase(false);
    }

    return (
        <div className='infoBody'>

            {/* -- INFO AREA -- */}
            <div className='cardInfoArea'>
                <div className='displaySection'>
                    <img src={selectedCard.image} className='cardDisplay'></img>
                </div>
                <div className='infoSection'>
                    {selectedCard && 
                    <>
                        <div className='title'>{selectedCard.name}</div>
                        <div className='information'>{selectedCard.subtitle}</div>
                        {selectedCard.HP && <div className='information'>HP: {selectedCard.HP}</div>}
                        {selectedCard.dmg && <div className='information'>DMG: {selectedCard.dmg}</div>}
                        {selectedCard.xp && <div className='information'>XP: {selectedCard.xp}</div>}
                        <div className='information'>Treasure: {selectedCard.treasure}</div>
                        <div className='cardDescription'>{selectedCard.description}</div>
                    </>
                    }
                </div>
            </div>

            {/* -- BUTTON AREA -- */}
            <div className='buttonArea'>
                <div className='phaseInfo'>Phase: {renderGamePhaseSwitch(gamePhase)}</div>
                <div className='buttonList'>
                    <div onClick={()=>handleNextButtonClick()} className='button'>Next</div>
                    <div className='button'>BACK</div>
                    <div className='button'>BUILD</div>
                    <div className='button'>STORE</div>
                </div>
            </div>

            {/* -- MESSAGE AREA -- */}
            <div className='messageArea'>
                    {renderMessageSwitch(gamePhase)}
                {/* <div className='messageBox'> */}
                    {/* <div className='message'>:New Heroes Are In Town.</div>
                    <div className='message'>:Golem Factory Has Been Built!</div>
                    <div className='message'>:You Are Now In Adventure Phase. Happy Hunting.</div>
                    <div className='message'>:Mage Killed! 1 Soul Acquired.</div>
                    <div className='message'>:You Have Been Wounded!</div> */}
                {/* </div> */}
            </div>
        </div>
    )
}

export default Info
