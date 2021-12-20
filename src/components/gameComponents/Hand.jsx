import React from 'react'
import '../css/Hand.css'
import { roomDeck } from "../../assets/cards"
import Card from './Card'

function Hand() {
    return (
        <div className='handBody'>
            <Card cardObj={roomDeck[0]} className="handCard"/>
            <Card cardObj={roomDeck[1]} className="handCard"/>
            <Card cardObj={roomDeck[2]} className="handCard"/>
            <Card cardObj={roomDeck[3]} className="handCard"/>
            <Card cardObj={roomDeck[4]} className="handCard"/>
            <Card cardObj={roomDeck[5]} className="handCard"/>
            <Card cardObj={roomDeck[6]} className="handCard"/>
            <Card cardObj={roomDeck[7]} className="handCard"/>
            <Card cardObj={roomDeck[8]} className="handCard"/>
        </div>
    )
}

export default Hand
