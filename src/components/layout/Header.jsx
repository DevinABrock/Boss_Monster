
import React from 'react'
import '../css/Header.css'
import {Link} from 'react-router-dom';

function Header() {
    return (
        <div className='navBar'>
            <Link className='navTitle' to="/">B<img className='navIcon' src='/favicon.ico' />SS MONSTER</Link>
            <div className='navList'>
                <Link className='navItem' to="dungeon-masters">Dungeon Masters</Link>
                <Link className='navItem' to="game">How To Play</Link>
                <Link className='navItem'to="credits">Credits</Link>
            </div>
        </div>
    )
}

export default Header
