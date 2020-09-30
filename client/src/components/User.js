import React from 'react';


function User(props) {
    return (
        <>
            <strong>Name:</strong> {props.user.name}<br />
            <strong>Email:</strong> {props.user.email}<br />
            <hr />
        </>
    );
}
export default User;
