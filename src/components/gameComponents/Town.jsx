import React from 'react'
import '../css/Town.css'
import Card from './Card'
import { heroDeck } from "../../assets/cards"

function Town() {
    return (
        <div className='townBody'>
            <div className='townTitle'>Town</div>
            <div className='townList'>
                <Card cardObj={heroDeck[0]} className="townCard"/>
                <Card cardObj={heroDeck[1]} className="townCard"/>
                <Card cardObj={heroDeck[2]} className="townCard"/>
                <Card cardObj={heroDeck[3]} className="townCard"/>
                <Card cardObj={heroDeck[4]} className="townCard"/>
                <Card cardObj={heroDeck[5]} className="townCard"/>
                <Card cardObj={heroDeck[6]} className="townCard"/>
                <Card cardObj={heroDeck[7]} className="townCard"/>
                <Card cardObj={heroDeck[8]} className="townCard"/>
                <Card cardObj={heroDeck[9]} className="townCard"/>
            </div>
        </div>
    )
}

export default Town
