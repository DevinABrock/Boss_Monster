import React from 'react'
import '../src/components/css/front.css';


function App() {
  return (
    <>
      <div className="homeBody">
            <div className="homeBanner">
                <img className="imgOne" src='/homeBanner3.png' alt="" />
                <div className='startButtonContainer'>
                    <div className='homeButton'>Start Game</div>
                </div>
            </div>
            {/* <div className='homeBottomContainer'>
                <img className="rocks" src='/rocks.png' alt="" />
            </div> */}
        </div>
    </>
  )
}

export default App
