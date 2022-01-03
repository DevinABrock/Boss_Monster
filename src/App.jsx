import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../src/components/css/front.css';
// import {Link} from 'react-router-dom'


function App() {
  const navigate = useNavigate();
  const [username, setUsername] = useState()
  useEffect(() => {
    localStorage.setItem('username', JSON.stringify(username));
  }, [username])


  return (
    <>
      <div className="homeBody">
        <div className="homeBanner">
          <img className="imgOne" src='/bossMonsterFinal.png' alt="" />
          <form className='startButtonContainer'>
            <input className="inputUsername" placeholder="Enter Username" type="text" required value={username} onChange={(e)=>setUsername(e.target.value)} name="username"/>
            <div className='homeButton' type="submit" value="Submit" >Start Game</div>
            {/* <Link to="/progress" className='homeButton'><div >Start Game</div></Link> */}
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
