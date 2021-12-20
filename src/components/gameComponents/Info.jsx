import React, { useEffect } from 'react'
import '../css/Info.css'
import { useSelector } from 'react-redux'

function Info() {

    const selectedCard = useSelector(state => state.misc.card)

    console.log("running info");

    useEffect(() => {
        console.log("inside useEffect");
        console.log(selectedCard);
    }, [selectedCard])

    return (
        <div className='infoBody'>

            {/* -- INFO AREA -- */}
            <div className='cardInfoArea'>
                <div className='displaySection'>
                    <img src={selectedCard.image} className='cardDisplay'></img>
                </div>
                <div className='infoSection'>
                    {selectedCard && 
                    <>
                        <div className='title'>{selectedCard.name}</div>
                        <div className='information'>{selectedCard.subtitle}</div>
                        {selectedCard.HP && <div className='information'>HP: {selectedCard.HP}</div>}
                        
                        <div className='information'>Treasure: {selectedCard.treasure}</div>
                        <div className='cardDescription'>{selectedCard.description}</div>
                    </>
                    }
                </div>
            </div>

            {/* -- BUTTON AREA -- */}
            <div className='buttonArea'>
                <div className='phaseInfo'>Phase: Adventure</div>
                <div className='buttonList'>
                    <div className='button'>NEXT</div>
                    <div className='button'>BACK</div>
                    <div className='button'>BUILD</div>
                    <div className='button'>STORE</div>
                </div>
            </div>

            {/* -- MESSAGE AREA -- */}
            <div className='messageArea'>
                <div className='messageBox'>
                    <div className='message'>:New Heroes Are In Town.</div>
                    <div className='message'>:Golem Factory Has Been Built!</div>
                    <div className='message'>:You Are Now In Adventure Phase. Happy Hunting.</div>
                    <div className='message'>:Mage Killed! 1 Soul Acquired.</div>
                    <div className='message'>:You Have Been Wounded!</div>
                </div>
            </div>
        </div>
    )
}

export default Info
