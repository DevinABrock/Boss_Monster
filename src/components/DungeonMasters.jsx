import React from 'react'
import './css/DungeonMasters.css'

function DungeonMasters() {
    return (
        <div className='dmBody'>
            {/* -- TITLE AREA -- */}
            <div className="dmBanner">
                <img className="imgOne" src='/homeBannerNoWords.png' alt="" />
                <div className='dmTitle'>
                    <div className='dmTitle1'>DUNGE<img className='dmIcon' src='/favicon.ico' />N</div>
                    <div className='dmTitle2'>MASTERS</div>
                </div>

                {/* -- LEADERBOARD AREA -- */}
                    <div className='leaderBoardContainer'>
                        <div className='dmGuide'>
                            <div className='dmGuideItem'>User</div>
                            <div className='dmGuideItem'>W/L</div>
                            <div className='dmGuideItem'>Souls</div>
                            <div className='dmGuideItem'>Rank</div>
                        </div>
                        <div className='dmUser'>
                            <div className='dmUserItem'>
                                <div></div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default DungeonMasters
