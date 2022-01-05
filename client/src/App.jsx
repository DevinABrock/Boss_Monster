import React, { useState, useEffect } from 'react';
import '../src/components/css/front.css';
// import './components/css/mediaQueries.css';
// import {Link} from 'react-router-dom'
import { addUsername } from './actions/sampleActions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function App() {

  const [username, setUsername] = useState("")
  const dispatch = useDispatch()

  useEffect(() => {
    localStorage.setItem('username', JSON.stringify(username));
  }, [username])
  let navigate = useNavigate();

  // event listener on enter key to submit username and nagivate to game page
  const listener = (e) => {
    if (e.key === "Enter"){
      handleFormSubmit()
    }
  }
  window.addEventListener("keydown", listener)

  const handleFormSubmit = () => {
    // console.log('running handleFormSubmit');
    // console.log(username);
    dispatch(addUsername(username))
    navigate("/progress")
  }

  return (
    <>
      <div className="homeBody">
        <div className="homeBanner">
        <img className="dmBackground" src='/homeBannerNoWords.png' alt="" />
        <img className='homeLogo' src="/logo.png" alt="" />
          <form className='startButtonContainer'>
            <input className="inputUsername" placeholder="Enter Username" type="text" required value={username} onChange={(e)=>setUsername(e.target.value)} name="username"/>
            <div className='homeButton' type="submit" value="Submit" onClick={handleFormSubmit}>Start Game</div>
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
