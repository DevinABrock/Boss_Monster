import React from 'react'
import './css/DungeonMasters.css'

function DungeonMasters() {
    return (
        <div className='dmBody'>
            <div className="dmBanner">
                <img className="imgOne" src='/homeBannerNoWords.png' alt="" />
                <div className='dmTitle'>
                    <div className='homeButton'>DUNGE<img className='dmIcon' src='/favicon.ico' />N</div>
                    <div className='homeButton'>MASTERS</div>
                </div>
            </div>
        </div>
    )
}

export default DungeonMasters
