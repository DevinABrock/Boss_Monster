import React from 'react';
import ReactDom from 'react-dom'
import './css/front.css';
import img1 from './images/bossMonster.png'

function Front() {
    return (
        <div className="homeContainer">
        <img className="imgOne" src={img1} alt="" />
        <input className="inputName" type="text" placeholder='Enter your name' />
        <button className="playGame" type="submit" >Play Boss Monster</button>
        </div>
    )
}

export default Front
