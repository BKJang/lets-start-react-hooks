import React, { useState } from 'react';

function Counter() {
    const [number, setNumber] = useState(0);

    const handleIncrease = () => {
        // setNumber(number + 1);
        setNumber(prevNumber => prevNumber + 1);
    }
    const handleDecrease = () => {
        // setNumber(number - 1);
        setNumber(prevNumber => prevNumber - 1);
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={handleIncrease}>+</button>
            <button onClick={handleDecrease}>-</button>
        </div>
    )
}

export default Counter;