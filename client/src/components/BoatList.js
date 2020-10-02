import React, { useEffect, useState } from 'react';

import Boat from './Boat';

function BoatList (props) {
    const [boats, setBoats] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/api/boats/');
            const responseData = await response.json();
            setBoats(responseData.boats);
        }
        fetchData();
    }, []);

    const boatComponents = boats.map((boat) => <Boat key={boat.id} boat={boat} />)
    return (
        <>
            <h1>Hello There</h1>
            <h1>Boat List: </h1>
            {boatComponents}
        </>
        );
}

export default BoatList;
