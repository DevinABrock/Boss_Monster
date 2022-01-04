import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import './css/game.css'
import Info from './gameComponents/Info'
import Hand from './gameComponents/Hand'
import Event from './gameComponents/Event'
import Town from './gameComponents/Town'
import Username from './gameComponents/Username'
import Dungeon from './gameComponents/Dungeon'
import { shuffleAllDecks, dealInitialCards } from './gameLogic/initializingDeck';
import {shuffleAllDecksAction, dealInitialCardsAction} from '../actions/sampleActions';

function Game() {

    const dispatch = useDispatch();
    const gamePhase = useSelector(state => state.gamePhase.gamePhase)
    const bossDeck = useSelector(state => state.cardDecks.bossDeck)
    // const heroDeck = useSelector(state => state.cardDecks.heroDeck)
    // const epicHeroDeck = useSelector(state => state.cardDecks.epicHeroDeck)
    const roomDeck = useSelector(state => state.cardDecks.roomDeck)
    // const playerBoss = useSelector(state => state.cardDecks.playerBoss)
    const playerRooms = useSelector(state => state.cardDecks.playerRooms)
    
    // this is the initialization setup to shuffle decks etc.
    useEffect(() => {
        const initializeDeck = () => {
            let shuffledDecks = shuffleAllDecks();
            dispatch(shuffleAllDecksAction(shuffledDecks));
        }
        initializeDeck();
    }, [])

    // if the player has no rooms but does have a roomDeck and the gamePhase is 1
    if(!playerRooms.length && roomDeck.length && gamePhase===1){
        console.log('dealing');
        dealInitialCards(bossDeck, roomDeck, dealInitialCardsAction, dispatch);
    }
    
    // console.log(playerBoss, playerRooms);
    // console.log(gamePhase);
    // console.log("bossDeck: ", bossDeck,"heroDeck: ", heroDeck,"epicHeroDeck: ", epicHeroDeck,"roomDeck: ", roomDeck);
    return (
        <div className='gameBody'>

            {/* -- INFO SIDE -- */}
            <div className='infoSide'>
                <div className='usernameArea'>
                    <Username />
                </div>
                <div className='infoArea'>
                    <Info />
                </div>
            </div>

            {/* -- GAME SIDE -- */}
            <div className='gameSide'>
                <div className='progressionArea'>
                    <div className='eventArea'>
                        <Event />
                    </div>
                    <div className='townArea'>
                        <Town />
                    </div>
                </div>
                <div className='dungeonArea'>
                    <Dungeon />
                </div>
                <div className='handArea'>
                    <Hand />
                </div>
            </div>
        </div>
    )
}

export default Game
