import React from 'react';

const Time = ({time}) => {
    return (
    <div>
        <h2>Current Time</h2>
        <span>time: {time.toLocaleTimeString()}</span>
    </div>
    );
}

export default Time;
