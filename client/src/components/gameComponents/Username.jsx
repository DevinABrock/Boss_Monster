import React from 'react'
import '../css/Username.css'
import { useSelector} from 'react-redux';

function Username() {

    const username = useSelector(state => state.playerStats.username)

    return (
        <div className='usernameBody'>
            {username}
        </div>
    )
}

export default Username
