import React from 'react';

const Weather = (props) => {
    return (
        <>
        <div className="container">
            <div className="place">
                <h1>{props.city}, {props.country}</h1>
                {minMaxTemp('10', '20')}
                Weather Description
            </div>
        </div>
        </>
    )
}

function minMaxTemp(min, max) {
    return (
        <>
        <h3>Minimum: {min}</h3>
        <h3>Maximum: {max}</h3>
        </>
    )
}

export default Weather