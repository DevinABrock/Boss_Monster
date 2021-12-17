import React from 'react'
import './css/Game.css'

function Game() {
    return (
        <div className='gameBody'>
            <div className='sectionTitle'>Decks</div>
            <div className='deckArea'>
            {/* -- DECKS -- */}
                <div className='decks'>
                <div className='cardSlot'>Epic Heroes</div>
                <div className='cardSlot'>Heroes</div>
                <div className='emptyCardSlot'></div>
                <div className='cardSlot'>Room Deck</div>
                <div className='cardSlot'>Discard</div>
                <div className='cardSlot'>Spell Deck</div>
                </div>
            {/* -- TOWN -- */}
            <div className='sectionTitle'>Town</div>
                <div className='town'>
                    <div className='cardSlot'>Ex.Hero</div>
                    <div className='cardSlot'>Ex.Hero</div>
                    <div className='cardSlot'>Ex.Hero</div>
                    <div className='cardSlot'>Ex.Hero</div>
                    <div className='cardSlot'>Ex.Hero</div>
                    <div className='cardSlot'>Ex.Hero</div>
        
                </div>
            </div>



            {/* -- HAND -- */}
            <div className='playerArea'>
            </div>
        </div>
    )
}

export default Game
