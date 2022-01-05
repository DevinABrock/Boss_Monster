import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../css/Info.css'
import { buildingMode, selectCard } from '../../actions/miscActions';
import { nextGamePhase, dealHeroesToTown, dealRoomCard, updatePlayerTreasure, baitHeroes, nextRound, setHeroStartOfDungeon, damageHero, moveHeroNumberOfSteps, heroKilled, decreasePlayerHealth, playerKilled, resetPlayerCards, resetGame, addBuildActions, heroSurvived, changeSwapRoomsMode, damageRoom, changeShowDiscardPile, drawFromDiscard, addSoul, ableToDestroy, destroyRoom, discardCard } from '../../actions/sampleActions';
import { diceRoll } from '../gameLogic/diceRoll';
import { blankCard } from '../../assets/cards';

import { shuffleAllDecks, dealInitialCards } from '../gameLogic/initializingDeck';
import { shuffleAllDecksAction, dealInitialCardsAction } from '../../actions/sampleActions';
import { Navigate } from 'react-router-dom';

function Info() {

    const dispatch = useDispatch();

    const gamePhase = useSelector(state => state.gamePhase.gamePhase)
    const gameRound = useSelector(state => state.gamePhase.gameRound)
    const playerRooms = useSelector(state => state.cardDecks.playerRooms)
    const playerDungeon = useSelector(state => state.cardDecks.playerDungeon)
    const playerHealth = useSelector(state => state.playerStats.health)
    const playerSouls = useSelector(state => state.playerStats.souls)
    const treasureCleric = useSelector(state => state.playerStats.treasureCleric)
    const treasureFighter = useSelector(state => state.playerStats.treasureFighter)
    const treasureThief = useSelector(state => state.playerStats.treasureThief)
    const buildActions = useSelector(state => state.playerStats.buildActions)
    const heroesAtStartOfDungeon = useSelector(state => state.cardDecks.heroesAtStartOfDungeon)
    const heroRoomPosition = useSelector(state => state.heroStats.heroRoomPosition)
    const buildingModeState = useSelector(state => state.misc.buildingMode)
    const heroHealth = useSelector(state => state.heroStats.heroHealth)
    const useButtonSwapping = useSelector(state => state.playerStats.useButtonSwapping)
    const swapRoomsMode = useSelector(state => state.playerStats.swapRoomsMode)
    const discardPile = useSelector(state => state.cardDecks.discardPile)
    const showDiscardPile = useSelector(state => state.cardDecks.showDiscardPile)
    const monsterCardFromDiscard = useSelector(state => state.cardDecks.monsterCardFromDiscard)
    const trapCardFromDiscard = useSelector(state => state.cardDecks.trapCardFromDiscard)
    const roomCardFromDiscard = useSelector(state => state.cardDecks.roomCardFromDiscard)
    const username = useSelector(state => state.playerStats.username)

    const selectedCard = useSelector(state => state.misc.card)
    const selectedCardClass = useSelector(state => state.misc.className)

    const destroyMode = useSelector(state => state.playerStats.destroyMode)

    const [win, setWin] = useState("L")

    const [tempMessage, setTempMessage] = useState("")
    const [cardCount, setCardCount] = useState(0)
    const [firstTimeInMaze, setFirstTimeInMaze] = useState(true)
    const [countMinotaursMaze, setCountMinotaursMaze] = useState(2) // count used to only damage room once per hero (when Minotaur's Maze is in play)
    const [countDracolichLair, setCountDracolichLair] = useState(2) // count used to count the number of cards that need to be discarded when using the Dracolich Lair ability 
    const [usingDracolichLair, setUsingDracolichLair] = useState(false) // count used to only damage room once per hero (when Minotaur's Maze is in play)

    const [openGrave, setOpenGrave] = useState(true)
    const [dracolichLair, setDracolichLair] = useState(true)
    const [vampireBordello, setVampireBordello] = useState(true)
    const [golemFactory, setGolemFactory] = useState(true)
    const [bottomlessPit, setBottomlessPit] = useState(false)
    const [boulderRamp, setBoulderRamp] = useState(false)
    const [crushinator, setCrushinator] = useState(false)
    const [crushinatorDamageModifier, setCrushinatorDamageModifier] = useState(false)
    const [usedCardID, setUsedCardID] = useState(null)

    useEffect(() => {
        // used to reset the once per turn values
        setGolemFactory(true)
        setOpenGrave(true)
        setDracolichLair(true)
        setVampireBordello(true)
        setCrushinatorDamageModifier(false)
    }, [gameRound])

    useEffect(() => {
        dispatch(updatePlayerTreasure(playerDungeon))
        // console.log('updating treasure');
    }, [playerDungeon])

    // useEffect(() => {
    //     // resets the values used for the Dracolich Lair ability
    //     setCountDracolichLair(2)
    //     setUsingDracolichLair(false)
    // }, [discardPile])

    useEffect(() => {
        setCardCount(0)
    }, [selectedCard])

    useEffect(() => {
        // resets value to true so next hero will also be sent back to previous room one time
        setFirstTimeInMaze(true)
        setCountMinotaursMaze(2)
    }, [heroesAtStartOfDungeon])

    useEffect(() => {
        
        let dungeonContainersSelectedCard = false

        playerDungeon.forEach(array => {
            if(array[0] === selectedCard){
                dungeonContainersSelectedCard = true
            }
        })

        if(!dungeonContainersSelectedCard){
            dispatch(selectCard(blankCard, "cardDisplay", blankCard.id))
        }

    }, [playerDungeon])

console.log("discardPile", discardPile);

    // checks if rooms have effects when the hero died
    const heroDiedCheck = () => {
        let roomName = playerDungeon[heroRoomPosition][0].name
        console.log('room hero died in: ', roomName);
        if (golemFactory && roomName === "Golem Factory") {
            dispatch(dealRoomCard())
            setGolemFactory(false)
        }
        else if (vampireBordello && roomName === "Vampire Bordello" && playerHealth < 5) {
            console.log('healed by vampire bordello room');
            dispatch(decreasePlayerHealth(-1))
            dispatch(addSoul())
            setVampireBordello(false)
        }
        else if (openGrave && roomName === "Open Grave") {
            if (discardPile.length > 0) {
                alert('The hero dies in the Open Grave. Select a Room Card below and click the "USE" button to add it to your hand.')
                dispatch(changeShowDiscardPile("Room Card"))
                setOpenGrave(false)
            }
            else {
                alert("The hero dies in the Open Grave but there are currently no cards in the discard pile. This card's effect is not triggered.")
            }
        }
    }

    const handleChangeGamePhase = () => {
        let message = ""
        // if 1 and player has rooms in their hand
        // console.log(gamePhase, playerRooms.length);numRoomsDestroyed
        if (gamePhase === 1 && playerRooms.length) {
            dispatch(updatePlayerTreasure(playerDungeon))
            dispatch(nextGamePhase())
        }
        // if 2 and user clicks next this will update whether a spell card takes effect for the round
        else if (gamePhase === 2) {
            dispatch(nextGamePhase())
        }
        // if 3 moving to heroes to town phase
        else if (gamePhase === 3) {
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
        else if (gamePhase === 4) {
            dispatch(addBuildActions(1)) // player can build 1 room per turn
            dispatch(updatePlayerTreasure(playerDungeon))
            dispatch(dealRoomCard())
            dispatch(nextGamePhase())
        }
        else if (gamePhase === 5) {
            // if build moving to bait and at least one room is built in dungeon
            // console.log(playerDungeon[0][0].id!=="D1");
            if (playerDungeon[0][0].id !== "D1") {
                dispatch(baitHeroes(treasureCleric, treasureFighter, treasureThief))
                if (buildActions > 0) { // if player still has build actions when NEXT is clicked, alert pops up
                    let proceedToNextPhase = window.confirm("You are proceeding to the next phase and still have unused build actions that will be lost.")
                    if (proceedToNextPhase) {
                        dispatch(nextGamePhase())
                        dispatch(addBuildActions(-buildActions)) // removed build actions if player does not build that turn
                    }
                }
                else {
                    dispatch(nextGamePhase())
                    dispatch(addBuildActions(-buildActions)) // removed build actions if player does not build that turn
                }
            }
            else {
                message += "You must build at least one Room in your dungeon before moving to the bait phase! "
            }
        }
        else if (gamePhase === 6) {
            if (!heroesAtStartOfDungeon.length) {

                if (gameRound === 14) {
                    setWin('W')
                    dispatch(playerKilled())
                }
                else {
                    dispatch(nextRound(playerDungeon))
                }
            }
            else {
                dispatch(setHeroStartOfDungeon(playerDungeon, heroesAtStartOfDungeon))
                dispatch(nextGamePhase())
            }
        }
        else if (gamePhase === 7) {
            // if adventure and no heroes in dungeon
            if (heroesAtStartOfDungeon.length === 0) {
                if (gameRound === 14) {
                    setWin('W')
                    dispatch(playerKilled())
                }
                else {
                    dispatch(nextRound(playerDungeon))
                }
            }
            // if heroes inside dungeon
            else {

                // console.log("heroRoomPosition", heroRoomPosition);
                let damage = 0;

                if (playerDungeon[heroRoomPosition][0].dmg === "*") {
                    damage = roomBuffs(heroRoomPosition)
                }
                else {
                    damage = playerDungeon[heroRoomPosition][0].dmg + roomBuffs(heroRoomPosition)
                }

                // checks to make sure the Minotaur's Maze isn't the first room in the dungeon.
                // playerDungeon[heroRoomPosition + 1] in the if-statement ensures that room isn't undefined or null
                if(playerDungeon[heroRoomPosition + 1] && playerDungeon[heroRoomPosition + 1][0].id !== "D1"){
                    if (playerDungeon[heroRoomPosition][0].name === "Minotaur's Maze" && firstTimeInMaze) {
                        dispatch(moveHeroNumberOfSteps(2))
                        setFirstTimeInMaze(false)
                        message += "The Hero loses their way in the maze and returns to the previous room. "
                    }
                }
                
                // console.log('room damage dealt to hero', damage);
                // console.log('hero health', heroHealth);
                let remainingHealth = heroHealth - damage;
                // reduces room durability by 20 the first time a hero enters a room
                if (firstTimeInMaze || countMinotaursMaze === 0) {
                    if (playerDungeon[heroRoomPosition][0].durability > 0) {
                        dispatch(damageRoom(playerDungeon[heroRoomPosition][0].id))
                        console.log("room damaged");
                    }
                }
                else if (!firstTimeInMaze) {
                    setCountMinotaursMaze(countMinotaursMaze - 1)
                    console.log("countMinotaursMaze incremented to", countMinotaursMaze);
                }

                // if hero has health after passing through the last room
                if (heroRoomPosition === 0 && (remainingHealth > 0 || (damage === '*' && damage === 0))) {
                    // if hero kills the boss, the player dies
                    // console.log('hero fighting boss');
                    if ((heroesAtStartOfDungeon[0].subtitle === "Ordinary-Hero" && playerHealth <= 1) || (heroesAtStartOfDungeon[0].subtitle === "Epic-Hero" && playerHealth <= 2)) {
                        // console.log('hero defeats boss');
                        dispatch(decreasePlayerHealth(playerHealth))
                        dispatch(playerKilled())
                    }
                    // if boss has enough health to survive the wound
                    else {
                        if (heroesAtStartOfDungeon[0].subtitle === "Ordinary-Hero") {
                            dispatch(decreasePlayerHealth(1))
                            if (damage === 0) {
                                message += `The hero survives your dungeon with ${remainingHealth} HP. You sustain a wound. `
                            }
                            else {
                                message += `The room deals ${damage} damage to the Hero. The hero survives your dungeon with ${remainingHealth} HP. You sustain a wound. `
                            }

                        }
                        else if (heroesAtStartOfDungeon[0].subtitle === "Epic-Hero") {
                            dispatch(decreasePlayerHealth(2))
                            if (damage === 0) {
                                message += `The hero survives your dungeon with ${remainingHealth} HP. You sustain two wounds. `
                            }
                            else {
                                message += `The room deals ${damage} damage to the Hero. The hero survives your dungeon with ${remainingHealth} HP. You sustain two wounds. `
                            }
                        }

                        // console.log('hero damage to boss', remainingHealth);
                        if (heroesAtStartOfDungeon.length === 1) {
                            dispatch(heroSurvived(true, playerDungeon, heroesAtStartOfDungeon))
                            if (gameRound === 14) {
                                setWin('W')
                                dispatch(playerKilled())
                            }
                            else {
                                dispatch(nextRound(playerDungeon))
                            }
                        }
                        else {
                            dispatch(heroSurvived(false, playerDungeon, heroesAtStartOfDungeon))
                        }
                    }
                }
                // if hero is not in the last room or has no health after passing the last room
                else {
                    // if hero passes through room that deals no damage
                    if (damage === 0) {
                        // console.log('HERO MOVING');
                        dispatch(moveHeroNumberOfSteps(-1))
                        message += "The Hero moves further in the dungeon unharmed. "
                    }
                    // if hero hit and still has health
                    else if (remainingHealth > 0) {
                        // console.log('HERO Wounded');
                        dispatch(damageHero(damage))
                        dispatch(moveHeroNumberOfSteps(-1))
                        message += `The room deals ${damage} damage to the Hero. The Hero was wounded but passes the room. The Hero has ${heroHealth - damage} health. `
                    }
                    // if hero is hit and killed
                    else {
                        if (heroesAtStartOfDungeon.length === 1) {
                            dispatch(heroKilled(true, playerDungeon, heroesAtStartOfDungeon))
                            message += `The room deals ${damage} damage to the Hero. The Hero was slain in your dungeon. Another soul has been added to your collection. `
                            if (gameRound === 14) {
                                setWin('W')
                                dispatch(playerKilled())
                            }
                            else {
                                heroDiedCheck()
                                dispatch(nextRound(playerDungeon))
                            }
                        }
                        else {
                            heroDiedCheck()
                            dispatch(heroKilled(false, playerDungeon, heroesAtStartOfDungeon))
                            message += `The room deals ${damage} damage to the Hero. The Hero was slain in your dungeon. Another soul has been added to your collection. `
                        }
                    }
                }
            }
        }

        // if game over and moving to restart
        else if (gamePhase === 10) {
            // const saveScore = async() => {
            //     let response = await fetch('/savescore');
            //     await response.json();
            // }
            // saveScore();
            let shuffledDecks = shuffleAllDecks();
            dispatch(shuffleAllDecksAction(shuffledDecks));
            dispatch(resetPlayerCards())
            dispatch(resetGame())
        }
        setTempMessage(message)
    }

    const renderMessageSwitch = (gamePhase) => {
        // console.log('running switch');
        switch (gamePhase) {
            case 1:
                return <div className='messageBox'><div className='message'>{tempMessage ? tempMessage : "Welcome to Boss Monster. Build your dungeon to lure heroes and steal their souls. You were dealt 5 Room cards and 1 Boss Card. You can build 1 room in your dungeon."}</div></div>
            case 2:

                return <div className='messageBox'><div className='message'>{tempMessage} This is the start of round {gameRound}.</div></div>
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
                return <div className='messageBox'><div className='message'>{tempMessage ? tempMessage : `You were dealt one Room Card. You can build in your dungeon.`}</div></div>
            case 6:
                return <div className='messageBox'><div className='message'>The heroes decide whether it's worth it to steal your stuff.</div> <div className='message'>{heroesAtStartOfDungeon.length} heroes are heading towards your dungeon. {(heroesAtStartOfDungeon.length) ? `A ${heroesAtStartOfDungeon[0].name} enters first.` : `Since no heroes entered your dungeon, this is the end of round ${gameRound}.`}</div></div>
            case 7:
                return <div className='messageBox'><div className='message'>{tempMessage ? tempMessage : "The hero is fighting your dungeon. Use spells or effect to help your rooms."}</div></div>
            case 10:
                return <div className='messageBox'><div className='message'>{win === "L" ? `You have been defeated and your loot looted! You made it through ${gameRound - 1} ${(gameRound !== 2) ? "rounds" : "round"} and collected ${playerSouls} ${(playerSouls !== 1) ? "souls" : "soul"}.` : `You managed to survive the heroes' attacks until you finally decide to retire from being a boss satisfied, letting a new boss take your place. You were able to collect ${playerSouls} ${(playerSouls !== 1) ? "souls" : "soul"}! `}</div></div>
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
                return <div>{win === "L" ? `Game Over ${gamePhase}` : `You Won! ${gamePhase}`}</div>
            default:
                break;
        }
    }

    const handleNextButtonClick = () => {
        handleChangeGamePhase();
    }

    const handleBuildButtonClick = (className) => {

        if (className === "handCard") {
            if (buildActions > 0 && (gamePhase === 1 || gamePhase === 5)) {
                // turns building mode on and off
                dispatch(buildingMode())
            }
            else if (buildActions === 0) {
                alert("You have no more build actions this turn.")
            }
            else if (gamePhase !== 1 || gamePhase !== 5) {
                alert("You can only build during the build phase.")
            }
        }
        else {
            alert("You can only build cards from your hand. Select a card from your hand, click \"Build\" and then select a spot to build your new dungeon room.")
        }

    }

    // function to show previous card in roomStack
    const previousCardClick = () => {

        if (cardCount === 0) {
            setCardCount(roomStack.length - 1)
        }
        else {
            setCardCount(cardCount - 1)
        }
    }

    // function to show next card in roomStack
    const nextCardClick = () => {

        if (cardCount === (roomStack.length - 1)) {
            setCardCount(0)
        }
        else {
            setCardCount(cardCount + 1)
        }
    }

    // grabbing stack of rooms in playerDungeon of selectedCard
    let roomStack = []
    playerDungeon.forEach(roomArr => {
        if (roomArr[0].id === selectedCard.id) {
            roomStack = [...roomArr]
        }
    })

    const roomBuffs = (i) => {
        let damageBuff = 0
        if(crushinatorDamageModifier){
            damageBuff += 2
        }
        // if current room is a trap room & the previous room is a Dizzygas Hallway, damage is buffed
        if (i < 5 && (playerDungeon[i][0].subtitle === "Trap Room" || playerDungeon[i][0].subtitle === "Advanced Trap Room") && playerDungeon[i + 1][0].name === "Dizzygas Hallway") {
            damageBuff += 2
            // console.log("Dizzygas Hallway");
        }
        // if current room is monster room & previous room is Goblin Armory, damage is buffed
        if (i < 5 && (playerDungeon[i][0].subtitle === "Monster Room" || playerDungeon[i][0].subtitle === "Advanced Monster Room") && playerDungeon[i + 1][0].name === "Goblin Armory") {
            damageBuff += 1
            // console.log("Goblin Armory")
        }
        // if current room is monster room & next room is Goblin Armory, damage is buffed
        if (i > 0 && (playerDungeon[i][0].subtitle === "Monster Room" || playerDungeon[i][0].subtitle === "Advanced Monster Room") && playerDungeon[i - 1][0].name === "Goblin Armory") {
            damageBuff += 1
            // console.log("Goblin Armory")
        }
        else if (playerDungeon[i][0].name === "Monster's Ballroom") {
            let numberOfMonsterRooms = 0
            playerDungeon.forEach(cardArr => {
                if (cardArr[0].subtitle === "Monster Room" || cardArr[0].subtitle === "Advanced Monster Room") {
                    numberOfMonsterRooms += 1
                }
            })
            // console.log("numberOfMonsterRooms", numberOfMonsterRooms);
            damageBuff += numberOfMonsterRooms
        }
        // console.log("damageBuff", damageBuff);
        return damageBuff
    }

    console.log("selectedCard", selectedCard)
    console.log("selectedCardClass", selectedCardClass)

    const handleUseButtonClick = () => {
        // if in swapping rooms mode and the selected card is in the dungeon
        if (selectedCardClass === "room" || selectedCardClass === "roomStack" ||  selectedCardClass === "discardCard" || selectedCardClass === "builtRoom" || (usingDracolichLair && selectedCardClass === "handCard")) {
            if (useButtonSwapping) {
                // console.log("swapping is allowed");
                dispatch(changeSwapRoomsMode())
            }
            // if in swapping rooms mode and the selected card is NOT in the dungeon
            else if (useButtonSwapping && selectedCardClass != "room") {
                alert("You must select a room from your dungeon first.");
            }

            if (usingDracolichLair && selectedCardClass === "handCard") {
                if (countDracolichLair > 0) {
                    dispatch(discardCard(selectedCard.id))
                    setCountDracolichLair(countDracolichLair - 1)
                    console.log("countDracolichLair", countDracolichLair);
                    // countDracolichLair is delayed in decrementing so if-statement below checks when countDracolich lair === 1
                    if (countDracolichLair === 1) {
                        setCountDracolichLair(2)
                        setUsingDracolichLair(false)
                        setDracolichLair(false)
                        dispatch(changeShowDiscardPile("Room Card"))
                    }
                }
                return
            }

            if (showDiscardPile) {
                if (roomCardFromDiscard && selectedCard.subtitle.includes("Room")) {
                    dispatch(drawFromDiscard(selectedCard.id))
                    dispatch(changeShowDiscardPile())
                }
                else if (monsterCardFromDiscard && selectedCard.subtitle.includes("Monster")) {
                    dispatch(drawFromDiscard(selectedCard.id))
                    dispatch(changeShowDiscardPile("Monster Room"))
                }
                else if (trapCardFromDiscard && selectedCard.subtitle.includes("Trap")) {
                    dispatch(drawFromDiscard(selectedCard.id))
                    dispatch(changeShowDiscardPile("Trap Room"))
                }
                else {
                    alert('Please select an appropriate card from the discard pile and then click the "USE" button.')
                }
                return
            }

            if (selectedCard.name === "Dracolich Lair" && dracolichLair && (selectedCardClass === "roomStack" || selectedCardClass === "builtRoom")) {
                setUsingDracolichLair(true)
                alert('You must discard two cards from your hand. Select one card and click the "USE" button, then select the second card and click the "USE" button.')
            }
            // if user selects a card that allows them to destroy a room
            else if (selectedCard.name === "Boulder Ramp") {
                // console.log("bouler room use effect");
                if (!destroyMode && gamePhase === 7) {
                    dispatch(ableToDestroy())
                    setBoulderRamp(true)
                    setUsedCardID(selectedCard.id)
                    setTempMessage("You are able to destroy a room in your dungeon. Select a room and click 'destroy'.")
                }
                if (!destroyMode && gamePhase != 7) {
                    setTempMessage("You can only destroy rooms during the Adventure Phase.")
                }
            }
            else if (selectedCard.name === "Bottomless Pit") {
                if (!destroyMode && gamePhase === 7) {
                    dispatch(ableToDestroy())
                    setBottomlessPit(true)
                    setTempMessage("You are able to destroy the Bottomless Pit. Select this room and click 'destroy'.")
                }
                if (!destroyMode && gamePhase != 7) {
                    setTempMessage("You can only destroy rooms during the Adventure Phase.")
                }
            }
            else if (selectedCard.name === "The Crushinator") {
                if (!destroyMode && gamePhase === 7) {
                    dispatch(ableToDestroy())
                    setCrushinator(true)
                    setUsedCardID(selectedCard.id)
                    setTempMessage("You are able to destroy another room in order to buff the rest of your rooms.")
                }
                if (!destroyMode && gamePhase != 7) {
                    setTempMessage("You can only destroy rooms during the Adventure Phase.")
                }
            }
            else if(selectedCard.name === "Dark Altar" && !destroyMode){
                if(discardPile.length > 0){
                    let roomIndex = null;
                    playerDungeon.forEach((array, index) => {
                        if (array[0] === selectedCard) {
                            roomIndex = index;
                        }
                    })
                    dispatch(destroyRoom(roomIndex))
                    dispatch(changeShowDiscardPile())
                }
                else{
                    let destroyRoomAnyway = window.confirm('There are currently no cards in the discard pile. Destroying this card will not trigger its effect. Click "OK" to continue destroying the room.')
                    if(destroyRoomAnyway){
                        let roomIndex = null;
                        playerDungeon.forEach((array, index) => {
                            if (array[0] === selectedCard) {
                                roomIndex = index;
                            }
                        })
                        dispatch(destroyRoom(roomIndex))
                        dispatch(changeShowDiscardPile())
                    }
                }
            }

            // if the button is in the destroy mode and the user has already selected a card in the dungeon
            // todo do we need to check selectedCardClass here??? we are checking in the outermost if-statement
            // todo if (destroyMode && selectedCardClass === "room" || selectedCardClass === "roomStack") {
            if (destroyMode) {
                // todo this will allow the user to destroy any Bottomless Pit in their dungeon
                if (bottomlessPit && selectedCard.name === "Bottomless Pit") {
                    checkRoomDestroyEffects()
                    let roomIndex = null;
                    playerDungeon.forEach((array, index) => {
                        if (array[0] === selectedCard) {
                            roomIndex = index;
                        }
                    })
                    dispatch(destroyRoom(roomIndex))
                    dispatch(ableToDestroy())
                    setBottomlessPit(false)
                }
                else if (boulderRamp) {
                    if(usedCardID !== selectedCard.id){
                        checkRoomDestroyEffects()
                        let roomIndex = null;
                        playerDungeon.forEach((array, index) => {
                            if (array[0] === selectedCard) {
                                roomIndex = index;
                            }
                        })
                        dispatch(destroyRoom(roomIndex))
                        dispatch(ableToDestroy())
                        setBoulderRamp(false)
                    }
                    else{
                        alert("You can only destroy another room with the Boulder Room's ability")
                    }
                }
                else if (crushinator) {
                    if(usedCardID !== selectedCard.id){
                        checkRoomDestroyEffects()
                        let roomIndex = null;
                        playerDungeon.forEach((array, index) => {
                            if (array[0] === selectedCard) {
                                roomIndex = index;
                            }
                        })
                        dispatch(destroyRoom(roomIndex))
                        dispatch(ableToDestroy())
                        setCrushinator(false)
                        setCrushinatorDamageModifier(true)
                    }
                    else{
                        alert("You can only destroy another room with the Crushinator's ability")
                    }
                }
            }
        }
        else {
            setTempMessage('You can only use effects from rooms in your dungeon.')
        }
    }

    const checkRoomDestroyEffects = () => {
        let tempMSG = "";
        console.log('room name', playerDungeon[heroRoomPosition][0]);
        playerDungeon.forEach(array => {
            if (array[0].name === "Recycling Center") {
                dispatch(dealRoomCard())
                dispatch(dealRoomCard())
                tempMSG += "You were dealt two cards from the recycling center after a room was destroyed. "
            }
        })
        // dont run this if the crushinator is active so the player doesnt get both buffs (crushinator damage and these rooms' damage)
        if(!crushinator) {
            // these check if hero is on a room that has an effect when other rooms are destroyed
            switch (playerDungeon[heroRoomPosition][0].name) {
                // todo right now, the game let's you destroy the other boulder ramp and the hero is damaged even when they are not in the boulder room you activated.
                case "Boulder Ramp":
                    console.log('hero on boulder ramp when destroyed');
                    if (heroHealth <= 5) {
                        console.log('hero less than or 5 health');
                        tempMSG += "The hero was killed by the Boulder Ramp."
                        heroDiedCheck()
                        if (heroesAtStartOfDungeon.length === 1) {
                            dispatch(heroKilled(true, playerDungeon, heroesAtStartOfDungeon))
                        }
                        else {
                            dispatch(heroKilled(false, playerDungeon, heroesAtStartOfDungeon))
                        }
                    }
                    else {
                        tempMSG += "The hero was wounded by the Boulder Ramp."
                        console.log('hero more than 5 health');
                        dispatch(damageHero(5))
                    }
                    setTempMessage(tempMSG)
                    break;
                case "Bottomless Pit":
                    tempMSG += "The hero was killed by the Bottomless Pit."
                    if (heroesAtStartOfDungeon.length === 1) {
                        dispatch(heroKilled(true, playerDungeon, heroesAtStartOfDungeon))
                    }
                    else {
                        dispatch(heroKilled(false, playerDungeon, heroesAtStartOfDungeon))
                    }
                    setTempMessage(tempMSG)
                    break
                default:
                    break;
            }
        }
    }

    const handleCancelClick = () => {
        // resetting values to false if "Cancel button is clicked"
        if (monsterCardFromDiscard) {
            dispatch(changeShowDiscardPile("Monster Room"))
        }
        if (trapCardFromDiscard) {
            dispatch(changeShowDiscardPile("Trap Room"))
        }
        if (roomCardFromDiscard) {
            dispatch(changeShowDiscardPile())
        }
        if (gamePhase === 10) {
            const saveScore = async () => {
                let userInfo = {
                    username,
                    souls: playerSouls,
                    win
                }
                let response = await fetch('/savescore', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                });
                await response.json();
            }
            saveScore();
            // Navigate('/dungeon-masters')
        }
        if (destroyMode) {
            dispatch(ableToDestroy())
            setTempMessage("You can no longer destroy a room.")
        }
    }

    return (
        <div className='infoBody'>

            {/* -- INFO AREA -- */}
            <div className='cardInfoArea'>
                {roomStack.length > 1
                    ?
                    <>
                        <div className='displaySection'>
                            <img src={roomStack[cardCount].image} className='cardDisplay' />
                            <div className="cardCountContainer">
                                <span className="cardCountLabel">Card:{cardCount + 1}/{roomStack.length} </span>
                                &nbsp;
                                <span className="cardStackButtons" onClick={previousCardClick}>&#171;</span>
                                &nbsp;
                                <span className="cardStackButtons" onClick={nextCardClick}>&#187;</span>
                            </div>
                        </div>
                        <div className='infoSection'>
                            <>
                                <div className='title'>{roomStack[cardCount].name}</div>
                                <div className='information'>{roomStack[cardCount].subtitle}</div>
                                {roomStack[cardCount].HP && <div className='information'>HP: {roomStack[cardCount].HP}</div>}
                                {roomStack[cardCount].dmg !== undefined && <div className='information'>DMG: {roomStack[cardCount].dmg}</div>}
                                {roomStack[cardCount].durability && <div className='information'>Durability: {roomStack[cardCount].durability}/100</div>}
                                {roomStack[cardCount].xp && <div className='information'>XP: {roomStack[cardCount].xp}</div>}
                                {roomStack[cardCount].treasure && <div className='information'>Treasure: {roomStack[cardCount].treasure}</div>}
                                <div className='cardDescription'>{roomStack[cardCount].description}</div>
                            </>
                        </div>
                    </>
                    :
                    <>
                        <div className='displaySection'>
                            <img src={selectedCard.image} className='cardDisplay' />
                        </div>
                        <div className='infoSection'>
                            {selectedCard &&
                                <>
                                    <div className='title'>{selectedCard.name}</div>
                                    <div className='information'>{selectedCard.subtitle}</div>
                                    {selectedCard.HP && <div className='information'>HP: {selectedCard.HP}</div>}
                                    {selectedCard.dmg !== undefined && <div className='information'>DMG: {selectedCard.dmg}</div>}
                                    {selectedCard.durability && <div className='information'>Durability: {selectedCard.durability}/100</div>}
                                    {selectedCard.xp && <div className='information'>XP: {selectedCard.xp}</div>}
                                    {selectedCard.treasure && <div className='information'>Treasure: {selectedCard.treasure}</div>}
                                    <div className='cardDescription'>{selectedCard.description}</div>
                                </>
                            }
                        </div>
                    </>
                }
            </div>

            {/* -- BUTTON AREA -- */}
            <div className='buttonArea'>
                <div className='phaseInfo'>Phase: {renderGamePhaseSwitch(gamePhase)} {gamePhase == 7 ? `Hero HP: ${heroHealth}` : null}</div>
                <div className='buttonList'>
                    {/* <div className='button'>STORE</div> */}
                    {(showDiscardPile || destroyMode) ? <div className='button' onClick={handleCancelClick}>CANCEL</div> : null}
                    <div onClick={handleUseButtonClick} className={swapRoomsMode ? 'buttonBuild' : 'button'}>{gamePhase === 10 ? "SAVE" : destroyMode ? "DESTROY" : useButtonSwapping ? "SWAP" : "USE"}</div>
                    {!useButtonSwapping && <div className={buildingModeState ? 'buttonBuild' : 'button'} onClick={() => handleBuildButtonClick(selectedCardClass)}>BUILD</div>}
                    {!useButtonSwapping && <div onClick={() => handleNextButtonClick()} className='button'>NEXT</div>}
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
