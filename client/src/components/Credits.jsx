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
                        Devin Brock <br /> Design <a className='creditsLink' target='_blank' href="https://github.com/DevinABrock">GitHub</a> <a className='creditsLink' target='_blank' href="https://www.linkedin.com/in/devin-a-brock/">LinkedIn</a>  <a className='creditsLink' target='_blank' href="https://devinbrock-portfolio.netlify.app/">Portfolio</a>
                    </div>
                </div>
                <div className='creditsPerson'>
                    <div className='creditInfo'>
                        James Ivy <br /> Design <a className='creditsLink' target='_blank' href="https://github.com/jameskivy">GitHub</a> <a className='creditsLink' target='_blank' href="https://www.linkedin.com/in/james-k-ivy/">LinkedIn</a>  <a className='creditsLink' target='_blank' href="https://jameskivy.github.io/portfolio/">Portfolio</a>
                    </div>
                </div>
                <div className='creditsPerson'>
                    <div className='creditInfo'>
                        Mercer Mahaffey <br /> Logic <a className='creditsLink' target='_blank' href="https://github.com/MercerMahaffey">GitHub</a> <a className='creditsLink' target='_blank' href="https://www.linkedin.com/in/mercer-mahaffey-a74b68220/">LinkedIn</a>  <a className='creditsLink' target='_blank' href="https://www.mercermahaffey.com/">Portfolio</a>
                    </div>
                </div>
                <div className='creditsPerson'>
                    <div className='creditInfo'>
                        Stephen Doty <br /> Logic <a className='creditsLink' target='_blank' href="https://github.com/stephendoty826">GitHub</a> <a className='creditsLink' target='_blank' href="https://www.linkedin.com/in/stephen-doty/">LinkedIn</a>  <a className='creditsLink' target='_blank' href="https://stephendoty.netlify.app/">Portfolio</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Credits

