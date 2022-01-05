import React, { useState, useEffect } from 'react';
import './css/DungeonMasters.css'


function DungeonMasters() {

    const [highScores, setHighScores] = useState([])

    useEffect(() => {
        const getScores = async () => {
            let response = await fetch('/getscores');
            let records = await response.json();

            function compareScores(a, b) {
                if (a.souls > b.souls) {
                    return -1
                }
                if (a.souls < b.souls) {
                    return 1
                }
                return 0
            }

            records.sort(compareScores)

            setHighScores(records)
        }
        getScores()
    }, [])

    // console.log(highScores);
    return (
        <div className='dmBody'>
            {/* -- TITLE AREA -- */}
            <div className="dmBanner">
                <img className="dmBackground" src='/homeBannerNoWords.png'/>
                <img className='dmTitleImg' src="/logo.png" alt="" />
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

                        {highScores.map((playerRecord, index) => {
                            
                            let badgeTitle = ""
                            if(index===0){
                                badgeTitle= "Dungeon Master"
                            }
                            else if(index===1){
                                badgeTitle= "Eater Of Heroes"
                            }
                            else if (index===2){
                                badgeTitle= "House Of Wolves"
                            }
                            else{
                                badgeTitle= "Final Boss"
                            }
                            return (
                                <div className='dmUserItem'>
                                    <div className='dmRank1'>{index + 1}</div>
                                    <div className='dmUsername1'>{playerRecord.username}</div>
                                    <div className='dmWL1'>{playerRecord.win}</div>
                                    <div className='dmSouls1'>{playerRecord.souls}</div>
                                    <div className='dmBadge1'>{badgeTitle}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <img className="dmGoldBanner" src='/dung-mast-banner.png' alt="" />
            </div>
        </div>
    )
}

export default DungeonMasters
