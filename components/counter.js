// components/Counter.js
import { useState, useEffect } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);


    const increment = () => {
        setCount(count + 1);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>A cool button to click while waiting.</h1>
            <p>Button was pressed {count} times.</p>
            <button onClick={increment} style={buttonStyle}>
                Button
            </button>
        </div>
    );
};

const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    backgroundColor: '#0070f3',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
};

export default Counter;
