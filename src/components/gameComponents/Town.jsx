import React from 'react'
import '../css/Town.css'
import Card from './Card'
import { heroDeck } from "../../assets/cards"
import { useSelector } from 'react-redux';

function Town() {

    const heroesInTown = useSelector(state => state.cardDecks.heroesInTown)

    return (
        <div className='townBody'>
            <div className='townTitle'>Town</div>
            <div className='townList'>
            {heroesInTown && heroesInTown.map((roomCard, index)=>{
                    return <Card cardObj={roomCard} className="townCard" key={index}/>
                })
            }
            </div>
        </div>
    )
}

export default Town
