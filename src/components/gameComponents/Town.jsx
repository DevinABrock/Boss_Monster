import React from 'react'
import '../css/Town.css'
import Card from './Card'
import { useSelector } from 'react-redux';

function Town() {

    const heroesInTown = useSelector(state => state.cardDecks.heroesInTown)
    const heroesAtStartOfDungeon = useSelector(state => state.cardDecks.heroesAtStartOfDungeon)

    return (
        <div className='townBody'>
            <div className='townTitle'>{heroesAtStartOfDungeon.length ? "Heroes going to Dungeon" : "Town"}</div>
            <div className='townList'>
                {!heroesAtStartOfDungeon.length ?
                    // {
                    heroesInTown && heroesInTown.map((roomCard, index) => {
                        return <Card cardObj={roomCard} className="townCard" key={index} />
                    })
                    // }
                    :
                    heroesAtStartOfDungeon.slice(1).map((roomCard, index) => {
                        return <Card cardObj={roomCard} className="townCard" key={index} />
                    })
                }
            </div>
        </div>
    )
}

export default Town
