import React, { useState, useEffect } from 'react';
import '../src/components/css/front.css';
// import './components/css/mediaQueries.css';
// import {Link} from 'react-router-dom'
import { addUsername } from './actions/sampleActions';
import { useDispatch } from 'react-redux';


function App() {
  const [username, setUsername] = useState()
  const dispatch = useDispatch()
  useEffect(() => {
    localStorage.setItem('username', JSON.stringify(username));
  }, [username])

  const handleFormSubmit = () => {
    console.log('running handleFormSubmit');
    dispatch(addUsername(username))
    navigate("/progress")
  }

  return (
    <>
      <div className="homeBody">
        <div className="homeBanner">
          <img className="imgOne" src='/bossMonsterFinal.png' alt="" />
          <form className='startButtonContainer'>
            <input className="inputUsername" placeholder="Enter Username" type="text" required value={username} onChange={(e)=>setUsername(e.target.value)} name="username"/>
            <div className='homeButton' type="submit" value="Submit" onClick={handleFormSubmit} >Start Game</div>
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
