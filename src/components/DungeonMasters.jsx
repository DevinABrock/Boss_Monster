import React from 'react'
import './css/DungeonMasters.css'

function DungeonMasters() {
    return (
        <div className='dmBody'>
            {/* -- TITLE AREA -- */}
            <div className="dmBanner">
                <img className="dmBackground" />
                <div className='dmTitle'>DUNGE<img className='dmIcon' src='/favicon.ico' />N MASTERS</div>

                {/* -- LEADERBOARD AREA -- */}
                <div className='leaderBoardContainer'>
                    <div className='dmGuide'>
                        <div className='dmRank'>Rank</div>
                        <div className='dmUsername'>User</div>
                        <div className='dmWL'>W/L</div>
                        <div className='dmSouls'>Souls</div>
                        <div className='dmBadge'>Title</div>
                    </div>
                    <div className='dmUserDisplay'>

                        {/* -- SEPERATE USER -- */}
                        <div className='dmUserItem'>
                            <div className='dmRank1'>1</div>
                            <div className='dmUsername1'>Username</div>
                            <div className='dmWL1'>W</div>
                            <div className='dmSouls1'>15</div>
                            <div className='dmBadge1'>Dungeon Master</div>
                        </div>

                        <div className='dmUserItem'>
                            <div className='dmRank2'>2</div>
                            <div className='dmUsername2'>Username</div>
                            <div className='dmWL2'>W</div>
                            <div className='dmSouls2'>12</div>
                            <div className='dmBadge2'>Eater Of Heroes</div>
                        </div>

                        <div className='dmUserItem'>
                            <div className='dmRank3'>3</div>
                            <div className='dmUsername3'>Username</div>
                            <div className='dmWL3'>L</div>
                            <div className='dmSouls3'>10</div>
                            <div className='dmBadge3'>House Of Wolves</div>
                        </div>

                        <div className='dmUserItem'>
                            <div className='dmRank'>4</div>
                            <div className='dmUsername'>Username</div>
                            <div className='dmWL'>W</div>
                            <div className='dmSouls'>4</div>
                            <div className='dmBadge'>Final Boss</div>
                        </div>

                        <div className='dmUserItem'>
                            <div className='dmRank'>5</div>
                            <div className='dmUsername'>Username</div>
                            <div className='dmWL'>L</div>
                            <div className='dmSouls'>4</div>
                            <div className='dmBadge'>Final Boss</div>
                        </div>

                        <div className='dmUserItem'>
                            <div className='dmRank'>6</div>
                            <div className='dmUsername'>Username</div>
                            <div className='dmWL'>W</div>
                            <div className='dmSouls'>4</div>
                            <div className='dmBadge'>Final Boss</div>
                        </div>

                        <div className='dmUserItem'>
                            <div className='dmRank'>7</div>
                            <div className='dmUsername'>Username</div>
                            <div className='dmWL'>L</div>
                            <div className='dmSouls'>4</div>
                            <div className='dmBadge'>Final Boss</div>
                        </div>

                        <div className='dmUserItem'>
                            <div className='dmRank'>8</div>
                            <div className='dmUsername'>Username</div>
                            <div className='dmWL'>W</div>
                            <div className='dmSouls'>4</div>
                            <div className='dmBadge'>Final Boss</div>
                        </div>

                        <div className='dmUserItem'>
                            <div className='dmRank'>9</div>
                            <div className='dmUsername'>Username</div>
                            <div className='dmWL'>L</div>
                            <div className='dmSouls'>4</div>
                            <div className='dmBadge'>Final Boss</div>
                        </div>

                        <div className='dmUserItem'>
                            <div className='dmRank'>10</div>
                            <div className='dmUsername'>Username</div>
                            <div className='dmWL'>W</div>
                            <div className='dmSouls'>4</div>
                            <div className='dmBadge'>Final Boss</div>
                        </div>

                    </div>
                </div>
                <img className="dmGoldBanner" src='/dung-mast-banner.png' alt="" />
            </div>
        </div>
    )
}

export default DungeonMasters
