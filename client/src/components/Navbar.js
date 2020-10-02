import React from 'react';
import './styling/navBar.css'

function Navbar() {
    return (
        <>
            <div className='navbar'>
                <a href='/'>SeaBnB</a>
                <a href='/search'>Get a Boat</a>
                <a href='/'>Become a Host</a>
                <a href='/'>Profile</a>

            </div>
        </>
    )
}

export default Navbar
