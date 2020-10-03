import React from 'react';
import '../styling/profile.css';

function ProfileTiles() {
    return (
        <div className='tiles'>
            <div classname='tiles-square' id='tile1'>User Info</div>
            <div classname='tiles-square' id='tile2'>Account Settings</div>
            <div classname='tiles-square' id='tile3'>Invite Friends</div>
            <div classname='tiles-square' id='tile4'>Tile4</div>
        </div>
    )
}

export default ProfileTiles
