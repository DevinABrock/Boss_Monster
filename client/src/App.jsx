import React, { useState, useEffect } from 'react';
import '../src/components/css/front.css';
import { addUsername } from './actions/sampleActions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function App() {
  const [username, setUsername] = useState()
  const dispatch = useDispatch()
  useEffect(() => {
    localStorage.setItem('username', JSON.stringify(username));
  }, [username])
  let navigate = useNavigate();

  const handleFormSubmit = () => {
    console.log('running handleFormSubmit');
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
            <input className="inputUsername" placeholder="Enter Username" type="text" required value={username} onChange={(e) => setUsername(e.target.value)} name="username" />
            <div className='homeButton' type="submit" value="Submit" onClick={handleFormSubmit} >Start Game</div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
