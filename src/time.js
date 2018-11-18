import React from 'react';
import style from './css/time.css';

const Time = ({time}) => {
    return (
    <div>
        <span className="time-block">time: {time.toLocaleTimeString()}</span>
    </div>
    );
}

export default Time;
