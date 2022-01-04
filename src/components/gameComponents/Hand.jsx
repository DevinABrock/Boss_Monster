import React from 'react'
import '../css/Hand.css'
import Card from './Card'
import { useSelector } from 'react-redux';

function Hand() {

    const playerRooms = useSelector(state => state.cardDecks.playerRooms)
    const discardPile = useSelector(state => state.cardDecks.discardPile)
    const showDiscardPile = useSelector(state => state.cardDecks.showDiscardPile)

    return (
        <div className='handContainer'>
            {showDiscardPile
            ?
            <>
                {discardPile.length > 0
                ?
                <>
                    <div className="cardDeckLabel">Discard Pile</div>
                    <div className="handBody">
                        {discardPile.map((roomCard, index)=>{
                                return <Card cardObj={roomCard} className="discardCard" key={index}/>
                            })
                        }
                    </div>
                </>
                :
                <div className="cardDeckLabel">The Discard Pile is Empty</div>
                }
            </>
            :
            <>
                <div className="cardDeckLabel">Player Hand</div>
                <div className="handBody">
                    {playerRooms && playerRooms.map((roomCard, index)=>{
                            return <Card cardObj={roomCard} className="handCard" key={index}/>
                        })
                    }
                </div>
            </>
            }
        </div>
    )
}

export default Hand
