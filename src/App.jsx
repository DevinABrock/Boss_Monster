import React from 'react'
import '../src/components/css/front.css';
import {Link} from 'react-router-dom'


function App() {
  return (
    <>
      <div className="homeBody">
            <div className="homeBanner">
                <img className="imgOne" src='/bossMonsterFinal.png' alt="" />
                <form className='startButtonContainer'>
                  <input className="inputUsername" type="text" placeholder='Enter Username' />
                    <Link to="/progress" className='homeButton'><div >Start Game</div></Link>
                </form>
            </div>
            {/* <div className='homeBottomContainer'>
                <img className="rocks" src='/rocks.png' alt="" />
            </div> */}
        </div>
    </>
  )
}

export default App
