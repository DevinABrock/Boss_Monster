import React from 'react';
import ReactDom from 'react-dom';
import './css/front.css';
// import banner from '/favicon.ico'

function Front() {
    return (
        <div className="homeBody">
            <div className="homeBanner">
                <img className="imgOne" src='/bossMonster.png' alt="" />
            </div>
            <div className='homeButtonContainer'>
                <div className='homeButton'>Dungeon Masters</div>
                <div className='homeButton'>How To Play</div>
                <div className='homeButton'>Credits</div>
            </div>
        </div>
    )
}

export default Front
