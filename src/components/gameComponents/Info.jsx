import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../css/Info.css'
import { buildingMode } from '../../actions/miscActions';
import { nextGamePhase, dealHeroesToTown, dealRoomCard, updatePlayerTreasure, baitHeroes, nextRound, setHeroStartOfDungeon, damageHero, moveHeroNumberOfSteps, heroKilled, decreasePlayerHealth, playerKilled, resetPlayerCards, resetGame } from '../../actions/sampleActions';
import { diceRoll } from '../gameLogic/diceRoll';

import { shuffleAllDecks, dealInitialCards } from '../gameLogic/initializingDeck';
import { shuffleAllDecksAction, dealInitialCardsAction } from '../../actions/sampleActions';

function Info() {

    const dispatch = useDispatch();

    const gamePhase = useSelector(state => state.gamePhase.gamePhase)
    const gameRound = useSelector(state => state.gamePhase.gameRound)
    const playerRooms = useSelector(state => state.cardDecks.playerRooms)
    const playerDungeon = useSelector(state => state.cardDecks.playerDungeon)
    const playerHealth = useSelector(state => state.playerStats.health)
    const treasureCleric = useSelector(state => state.playerStats.treasureCleric)
    const treasureFighter = useSelector(state => state.playerStats.treasureFighter)
    const treasureThief = useSelector(state => state.playerStats.treasureThief)
    const heroesAtStartOfDungeon = useSelector(state => state.cardDecks.heroesAtStartOfDungeon)
    const heroRoomPosition = useSelector(state => state.heroStats.heroRoomPosition)
    const buildingModeState = useSelector(state => state.misc.buildingMode)
    const heroHealth = useSelector(state => state.heroStats.heroHealth)

    const selectedCard = useSelector(state => state.misc.card)
    const selectedCardClass = useSelector(state => state.misc.className)

    const [tempMessage, setTempMessage] = useState("")

    useEffect(() => {
        dispatch(updatePlayerTreasure(playerDungeon))
        console.log('updating treasure');
    }, [playerDungeon])

    const handleChangeGamePhase = () => {
        // if 1 and player has rooms in their hand
        console.log(gamePhase, playerRooms.length);
        if (gamePhase === 1 && playerRooms.length) {
            dispatch(updatePlayerTreasure(playerDungeon))
            dispatch(nextGamePhase())
        }
        // if 2 and user clicks next this will update whether a spell card takes effect for the round
        if (gamePhase === 2) {
            dispatch(nextGamePhase())
        }
        // if 3 moving to heroes to town phase
        if (gamePhase === 3) {
            // if the game is in the first 4 rounds deal the ordinary heroes
            if (gameRound < 5) {
                dispatch(dealHeroesToTown('ordinary', 2))
            }
            // if the game is past the 4th round deal the epic heroes
            else {
                dispatch(dealHeroesToTown('epic', 2))
            }

            dispatch(nextGamePhase())
        }
        // if 4 moving to build phase
        if (gamePhase === 4) {
            dispatch(updatePlayerTreasure(playerDungeon))
            dispatch(dealRoomCard())
            dispatch(nextGamePhase())
        }
        if (gamePhase === 5) {
            // if build moving to bait and at least one room is built in dungeon
            console.log(playerDungeon[0][0].id!=="D1");
            if(playerDungeon[0][0].id!=="D1"){
                dispatch(baitHeroes(treasureCleric, treasureFighter, treasureThief))
                dispatch(nextGamePhase())
                setTempMessage("")
            }
            else{
                setTempMessage("You must build at least one Room in your dungeon before moving to the bait phase!")
            }
            
        }
        if (gamePhase === 6) {
            if (!heroesAtStartOfDungeon.length) {
                dispatch(nextRound())
            }
            else {
                dispatch(setHeroStartOfDungeon(playerDungeon, heroesAtStartOfDungeon))
                dispatch(nextGamePhase())
            }
        }
        if (gamePhase === 7) {
            // if adventure and no heroes in dungeon
            if (heroesAtStartOfDungeon.length === 0) {
                dispatch(nextRound())
            }
            // if heroes inside dungeon
            else {
                console.log(playerDungeon);
                console.log(heroRoomPosition);
                let damage = playerDungeon[heroRoomPosition][0].dmg
                console.log('room damage dealt to hero', damage);
                console.log('hero health', heroHealth);
                console.log('hero health - damage', heroHealth - damage);
                let remainingHealth = heroHealth - damage;
                // if hero has health after passing through the last room
                if (heroRoomPosition === 0 && (remainingHealth > 0 || damage === '*')) {
                    // if remaining hero health is greater than or equal to player health the player dies
                    console.log('hero fighting boss');
                    if (remainingHealth >= playerHealth) {
                        console.log('hero defeats boss');
                        dispatch(decreasePlayerHealth(playerHealth))
                        dispatch(playerKilled())
                        setTempMessage("")
                    }
                    // if remaining hero health is less than the player health, the player is wounded but hero is killed
                    else if (remainingHealth < playerHealth) {
                        console.log('hero damage to boss', remainingHealth);
                        dispatch(decreasePlayerHealth(remainingHealth))
                        dispatch(heroKilled())
                        if (heroesAtStartOfDungeon.length > 1) {
                            dispatch(setHeroStartOfDungeon(playerDungeon, heroesAtStartOfDungeon))
                        }
                        else {
                            dispatch(nextRound())
                            setTempMessage("")
                        }
                    }
                }
                // if hero is not in last room
                else {
                    // if hero hit and still has health
                    if (remainingHealth > 0) {
                        // console.log('HERO Wounded');
                        dispatch(damageHero(damage))
                        dispatch(moveHeroNumberOfSteps(-1))
                        setTempMessage("The Hero is wounded but passes the room.")
                    }
                    // if hero passes through room that deals no damage
                    else if (damage === "*") {
                        // console.log('HERO MOVING');
                        dispatch(moveHeroNumberOfSteps(-1))
                        setTempMessage("The Hero moves further in the dungeon unharmed.")
                    }
                    // if hero is  hit and killed
                    else {
                        console.log('hero killed');
                        dispatch(heroKilled())
                        if (heroesAtStartOfDungeon.length > 1) {
                            dispatch(setHeroStartOfDungeon(playerDungeon, heroesAtStartOfDungeon))
                            setTempMessage("The Hero was slain in your dungeon.")
                        }
                        else {
                            dispatch(nextRound())
                            setTempMessage("")
                        }
                    }

                }

            }
        }
        // if game over and moving to restart
        if (gamePhase === 10) {
            let shuffledDecks = shuffleAllDecks();
            dispatch(shuffleAllDecksAction(shuffledDecks));
            dispatch(resetPlayerCards())
            dispatch(resetGame())
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

                let { rollNumber, isHit } = diceRoll(gameRound);

                return <div className='messageBox'>
                    <div className='message'>Rolling a dice to see if you are hit by spell!</div>
                    <div className='message'>Dice Result: {rollNumber}</div>
                    {isHit ? <div className='message'>You are Hit!</div> : <div className='message'>You manage to avoid the spell!</div>}
                </div>
            case 4:
                return <div className='messageBox'><div className='message'>Adventurers wandering into Town.</div></div>
            case 5:
                return <div className='messageBox'><div className='message'>{tempMessage ? tempMessage : "You were dealt one Room Card.You can build one Room in your dungeon."}</div></div>
            case 6:
                return <div className='messageBox'><div className='message'>The Heroes decide whether it's worth it to steal your stuff.</div> {heroesAtStartOfDungeon.length} heroes are heading towards your dungeon. {(heroesAtStartOfDungeon.length) ? `A ${heroesAtStartOfDungeon[0].name} enters first.` : `Since no heroes entered your dungeon, this is the end of round ${gameRound}.`}<div className='message'></div></div>
            case 7:
                return <div className='messageBox'><div className='message'>{tempMessage ? tempMessage : "The hero is fighting your dungeon. Use spells or effect to help your rooms."}</div></div>
            case 10:
                return <div className='messageBox'><div className='message'>You have been defeated and your loot looted! You made it through {gameRound - 1} {(gameRound !== 2) ? "rounds" : "round"}.</div></div>
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
            case 6:
                return `Adventure ${gamePhase}`
            case 7:
                return `Adventure ${gamePhase}`
            case 10:
                return `Game Over ${gamePhase}`
            default:
                break;
        }
    }

    const handleNextButtonClick = () => {

        handleChangeGamePhase();

    }

    const handleBuildButtonClick = (className) => {

        if (className === "handCard") {
            // turns building mode on and off
            dispatch(buildingMode())
        }
        else {
            alert("You can only build cards from your hand.")
        }

    }

    return (
        <div className='infoBody'>

            {/* -- INFO AREA -- */}
            <div className='cardInfoArea'>
                <div className='displaySection'>
                    <img src={selectedCard.image} className='cardDisplay' />
                </div>
                <div className='infoSection'>
                    {selectedCard &&
                        <>
                            <div className='title'>{selectedCard.name}</div>
                            <div className='information'>{selectedCard.subtitle}</div>
                            {selectedCard.HP && <div className='information'>HP: {selectedCard.HP}</div>}
                            {selectedCard.dmg && <div className='information'>DMG: {selectedCard.dmg}</div>}
                            {selectedCard.xp && <div className='information'>XP: {selectedCard.xp}</div>}
                            {selectedCard.treasure && <div className='information'>Treasure: {selectedCard.treasure}</div>}
                            <div className='cardDescription'>{selectedCard.description}</div>
                        </>
                    }
                </div>
            </div>

            {/* -- BUTTON AREA -- */}
            <div className='buttonArea'>
                <div className='phaseInfo'>Phase: {renderGamePhaseSwitch(gamePhase)}</div>
                <div className='buttonList'>
                    <div className='button'>STORE</div>
                    <div className='button'>USE EFFECT</div>
                    <div className={buildingModeState ? 'buttonBuild' : 'button'} onClick={() => handleBuildButtonClick(selectedCardClass)}>BUILD</div>
                    <div onClick={() => handleNextButtonClick()} className='button'>NEXT</div>
                </div>
            </div>

            {/* -- MESSAGE AREA -- */}
            <div className='messageArea'>
                {renderMessageSwitch(gamePhase)}
            </div>
        </div>
    )
}

export default Info
