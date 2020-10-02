import React from 'react';
import './styling/searchBar.css';

function Searchbar() {
    return (
        <>
            <div className='searchBar'>
                <h2>Search Me</h2>
                <input type='text'/>
                <img src="https://www.flaticon.com/svg/static/icons/svg/875/875623.svg" />

                {/* <div className='tagline'>
                    <p>Money can't buy you happiness</p>
                    <p>but it can get you a boat</p>
                    <p id='small-text'>...and thats close enough</p>
                </div> */}
            </div>

        </>
    )
}

export default Searchbar
