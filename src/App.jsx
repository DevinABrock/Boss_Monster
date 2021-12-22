import React from 'react'
import '../src/components/css/front.css';
import {Link} from 'react-router-dom'


function App() {
  return (
    <>
      <div className="homeBody">
            <div className="homeBanner">
                <img className="imgOne" src='/homeBanner3.png' alt="" />
                <div className='startButtonContainer'>
                    <Link to="/progress" className='homeButton'><div >Start Game</div></Link>
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
