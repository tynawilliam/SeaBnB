import React from 'react';


function Boat(props) {
    return (
        <>
            <strong>Name:</strong> {props.boat.name}<br />
            <strong>Description:</strong> {props.boat.description}<br />
            <hr />
        </>
    );
}
export default Boat;
