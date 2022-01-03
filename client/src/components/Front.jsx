import React from 'react';
import ReactDom from 'react-dom';
import './css/front.css';
// import banner from '/favicon.ico'

function Front() {
    return (
        <div className="homeBody">
            <div className="homeBanner">
                <img className="imgOne" src='/homeBanner3.png' alt="" />
                <div className='startButtonContainer'>
                    <div className='homeButton'>Start Game</div>
                </div>
            </div>
            {/* <div className='homeBottomContainer'>
                <img className="rocks" src='/rocks.png' alt="" />
            </div> */}
        </div>
    )
}

export default Front
