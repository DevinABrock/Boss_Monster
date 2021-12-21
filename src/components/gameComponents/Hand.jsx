import React from 'react'
import '../css/Hand.css'
import { roomDeck } from "../../assets/cards"
import Card from './Card'
import { useSelector } from 'react-redux';

function Hand() {

    const playerRooms = useSelector(state => state.cardDecks.playerRooms)

    return (
        <div className='handBody'>
            {playerRooms && playerRooms.map((roomCard, index)=>{
                    return <Card cardObj={roomCard} className="handCard" key={index}/>
                })
            }
        </div>
    )
}

export default Hand
