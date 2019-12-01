import React from 'react';
import 'weather-icons/css/weather-icons.css';


const Weather = (props) => {
    return (
        <>
        <div className="container">
            <div className="place">
                <h1>Welcome to {props.city}!</h1>
                    <i className="wi wi-day-sunny display-1"/>
                {props.main}
                <h1>{props.cel}°C</h1>
                {minMaxTemp(props.temp_min, props.temp_max)}
                
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