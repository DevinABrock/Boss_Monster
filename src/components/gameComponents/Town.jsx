import React from 'react'
import '../css/Town.css'
import Drac from '../../images/card-images/bosses/draculord.svg'


function Town() {
    return (
        <div className='townBody'>
            <div className='townTitle'>Town</div>
            <div className='townList'>
                <img src={Drac} className='townCard'></img>
                <img src={Drac} className='townCard'></img>
                <img src={Drac} className='townCard'></img>
                <img src={Drac} className='townCard'></img>
                <img src={Drac} className='townCard'></img>
            </div>
        </div>
    )
}

export default Town
