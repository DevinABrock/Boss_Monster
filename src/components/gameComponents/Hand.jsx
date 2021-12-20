import React from 'react'
import '../css/Hand.css'
import Drac from '../../images/card-images/bosses/draculord.svg'


function Hand() {
    return (
        <div className='handBody'>
            <img src={Drac} className='handCard'></img>
            <img src={Drac} className='handCard'></img>
            <img src={Drac} className='handCard'></img>
            <img src={Drac} className='handCard'></img>
            <img src={Drac} className='handCard'></img>
            <img src={Drac} className='handCard'></img>
            <img src={Drac} className='handCard'></img>
            <img src={Drac} className='handCard'></img>
        </div>
    )
}

export default Hand
