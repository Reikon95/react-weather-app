import React from 'react';

const Weather = (props) => {
    return (
        <>
        <div className="container">
            <div className="place">
                <h1>Welcome to {props.city}!</h1>
                <h1>{props.cel}C</h1>
                {minMaxTemp(props.temp_min, props.temp_max)}
                The main weather pattern today will be {props.main}.
                Have a great day!
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