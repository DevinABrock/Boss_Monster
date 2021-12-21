import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../css/Info.css'
import { nextGamePhase, dealHeroesToTown } from '../../actions/sampleActions';
import { diceRoll } from '../gameLogic/diceRoll';


function Info() {

    const dispatch = useDispatch();

    const gamePhase = useSelector(state => state.gamePhase.gamePhase)
    const gameRound = useSelector(state => state.gamePhase.gameRound)
    const playerRoomHand = useSelector(state => state.cardDecks.playerRoomHand)

    const [switchRanThisGamePhase, setSwitchRanThisGamePhase] = useState(false);
    
    const handleChangeGamePhase = () => {
        // if 1 and player has rooms in their hand
        if(gamePhase===1 && playerRoomHand.length){
            dispatch(nextGamePhase())
        }
        // if 2 and user clicks next this will update whether a spell card takes effect for the round
        if(gamePhase===2){
            dispatch(nextGamePhase())
        }
    }

    const renderMessageSwitch = (gamePhase) => {
        console.log('running switch');
            switch (gamePhase) {
                case 1:
                    
                    return <div className='messageBox'><div className='message'>Build a room in your dungeon!</div></div>
                case 2:
                    
                    let {rollNumber, isHit} = diceRoll(gameRound);
                    
                    return <div className='messageBox'>
                        <div className='message'>Rolling a dice to see if you are hit by spell!</div>
                        <div className='message'>Dice Result: {rollNumber}</div>
                        {isHit? <div className='message'>You are Hit!</div>: <div className='message'>You manage to avoid the spell!</div>}
                        </div>
                case 3:
                    if(!switchRanThisGamePhase){
                        setSwitchRanThisGamePhase(true)
                        dispatch(dealHeroesToTown('ordinary', 2))
                    }
                    return <div className='messageBox'><div className='message'>Adventurers wandering into Town.</div></div>
                default:
                    break;
            }
    }
    const renderGamePhaseSwitch = (gamePhase) => {
        switch (gamePhase) {
            case 1:
                return `Pre-Game Phase ${gamePhase}`
            case 2:
                return `Dice-Roll Phase ${gamePhase}`
            case 3:
                return `Dealing Heroes Phase ${gamePhase}`
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
                    <img src='/card-images/heroes/cleric-ordinary(6).svg' className='cardDisplay'></img>
                </div>
                <div className='infoSection'>
                    <div className='title'>Draculord</div>
                    <div className='information'>Hypnotic Vampire</div>
                    <div className='information'>900</div>
                    <div className='information'>Cleric</div>
                    <div className='information'>Target opponent reveals his or her hand. Take one card and put it into your hand.</div>
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
