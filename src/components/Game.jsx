import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import './css/game.css'
import Info from './gameComponents/Info'
import Hand from './gameComponents/Hand'
import Event from './gameComponents/Event'
import Town from './gameComponents/Town'
import Username from './gameComponents/Username'
import Dungeon from './gameComponents/Dungeon'
import { shuffleAllDecks } from './gameLogic/initializingDeck';
import {shuffleAllDecksAction} from '../actions/sampleActions';

function Game() {

    const dispatch = useDispatch();
    const bossDeck = useSelector(state => state.cardDecks.bossDeck)
    const heroDeck = useSelector(state => state.cardDecks.heroDeck)
    const epicHeroDeck = useSelector(state => state.cardDecks.epicHeroDeck)
    const roomDeck = useSelector(state => state.cardDecks.roomDeck)
    
    // this is the initialization setup to shuffle decks etc.
    useEffect(() => {
        const initializeDeck = () => {
            let shuffledDecks = shuffleAllDecks();
            dispatch(shuffleAllDecksAction(shuffledDecks));
        }
        initializeDeck();
    }, [])
    
    console.log(bossDeck, heroDeck, epicHeroDeck, roomDeck);
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
