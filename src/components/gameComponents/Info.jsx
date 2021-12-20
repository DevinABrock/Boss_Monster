import React from 'react'
import '../css/Info.css'

function Info() {
    return (
        <div className='infoBody'>

            {/* -- INFO AREA -- */}
            <div className='cardInfoArea'>
                <div className='displaySection'>
                    <img src='/card-images/heroes/cleric-ordinary(6).svg' className='cardDisplay'></img>
                </div>
                <div className='infoSection'>
                    <div className='title'>Draculord</div>
                    <div className='information'>Hypnotic Vampire</div>
                    <div className='information'>900</div>
                    <div className='information'>Cleric</div>
                    <div className='information'>Target opponent reveals his or her hand. Take one card and put it into your hand.</div>
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
