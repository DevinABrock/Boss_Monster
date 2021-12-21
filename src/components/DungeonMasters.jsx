import React from 'react'
import './css/DungeonMasters.css'

function DungeonMasters() {
    return (
        <div className='dmBody'>
            {/* -- TITLE AREA -- */}
            <div className="dmBanner">
                <img className="dmBackground" src='/dung_mast_background.png' alt="" />
                    <div className='dmTitle'>DUNGE<img className='dmIcon' src='/favicon.ico' />N MASTERS</div>

                {/* -- LEADERBOARD AREA -- */}
                    <div className='leaderBoardContainer'>
                        <div className='dmGuide'>
                            <div className='dmRank'>Rank</div>
                            <div className='dmUsername'>User</div>
                            <div className='dmWL'>W/L</div>
                            <div className='dmSouls'>Souls</div>
                            <div className='dmBadge'>Badge</div>
                        </div>
                        <div className='dmUserDisplay'>

                        {/* -- SEPERATE USER -- */}
                            <div className='dmUserItem'>
                                <div className='dmRank'>1</div>
                                <div className='dmUsername'>Username</div>
                                <div className='dmWL'>L</div>
                                <div className='dmSouls'>4</div>
                                <div className='dmBadge'>Legend</div>
                            </div>

                            <div className='dmUserItem'>
                                <div className='dmRank'>2</div>
                                <div className='dmUsername'>Username</div>
                                <div className='dmWL'>W</div>
                                <div className='dmSouls'>4</div>
                                <div className='dmBadge'>Legend</div>
                            </div>
                            
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default DungeonMasters
