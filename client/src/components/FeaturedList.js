import React from 'react'
import './styling/featuredList.css'

function FeaturedList() {
    return (
        <>
            <div className='featuredList'>
                <div className='featuredList1'>
                    <img src='https://images.unsplash.com/photo-1577980008374-42bc5f61d0d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80' alt='Not Found'/>
                </div>
                <div className='featuredList1'>
                    <img src='https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80' alt='Not Found'/>
                </div>
                <div className='featuredList1'>
                    <img src='https://images.unsplash.com/photo-1581272120682-97d9c87e7ccb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80' alt='Not Found'/>
                </div>
            </div>
        </>
    )
}

export default FeaturedList
