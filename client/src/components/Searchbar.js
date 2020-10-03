import React from 'react';
import './styling/searchBar.css';

function Searchbar() {

    const onsubmit = e => {
        console.log('Hey')
    }
    return (
        <>
            <div className='searchBar'>
                <div>
                    <h2>Find your next adventure</h2>
                </div>
                <div>
                    <form className='searchForm' onSubmit={onsubmit}>
                        <input type='text'/>
                    </form>
                    <input type='image' src="https://www.flaticon.com/svg/static/icons/svg/875/875623.svg" className='button'/>
                </div>

                <div className='tagline'>
                    {/* <p>Money can't buy you happiness</p>
                    <p>but it can get you a boat</p>
                    <p id='small-text'>...and thats close enough</p> */}
                </div>
            </div>

        </>
    )
}

export default Searchbar
