import React from 'react'
import "./css/Credits.css"

function Credits() {
    return (
            <div className='creditsContainer'>
            <img className="dmBackground" src='/homeBannerNoWords.png' alt="" />

                <div className='creditsTitle'>
                    <img className='creditsTitleImg' src="/logo.png" alt="" />
                </div>
                <div className='creditsMsg'>
                    Based On The Boss Monster Card Game <br /> By Brother Wise Games! <br /> This online version was created by:
                </div>
                <div className='credits'>
                    <div className='creditsPerson'>
                        <div className='creditInfo'>
                            Devin Brock <br /> Design <a className='creditsLink' href="#">GitHub</a> <a className='creditsLink' href="#">LinkedIn</a>  <a className='creditsLink' href="#">Portfolio</a>
                        </div>
                    </div>
                    <div className='creditsPerson'>
                        <div className='creditInfo'>
                            Devin Brock <br /> Design <a className='creditsLink' href="#">GitHub</a> <a className='creditsLink' href="#">LinkedIn</a>  <a className='creditsLink' href="#">Portfolio</a>
                        </div>
                    </div>
                    <div className='creditsPerson'>
                        <div className='creditInfo'>
                            Devin Brock <br /> Design <a className='creditsLink' href="#">GitHub</a> <a className='creditsLink' href="#">LinkedIn</a>  <a className='creditsLink' href="#">Portfolio</a>
                        </div>
                    </div>
                    <div className='creditsPerson'>
                        <div className='creditInfo'>
                            Devin Brock <br /> Design <a className='creditsLink' href="#">GitHub</a> <a className='creditsLink' href="#">LinkedIn</a>  <a className='creditsLink' href="#">Portfolio</a>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Credits

