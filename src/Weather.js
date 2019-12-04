import React from 'react';
import 'weather-icons/css/weather-icons.css';
import './Weather.css'


const Weather = (props) => {
    return (
        <>
        <div className="container">
            <div className="place">
                <h1>Welcome to {props.city}!</h1>
                    {getIcon(props)}
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

function getIcon(props) {
    return props.main === "Clouds" ? (
        <h1 className="py-2">
        <i className="wi wi-day-cloudy display-1 weather-icon"/>
        </h1>
    ) : props.main === "Rain" || props.main === "Drizzle" ? (
        <h1 className="py-2">
        <i className="wi wi-day-rain display-1 weather-icon"/>
        </h1>
    ) : props.main === "Sunny" || props.main === "Clear" ? (
        <h1 className="py-2">
        <i className="wi wi-day-sunny display-1 weather-icon"/>
        </h1>       
    ) : props.main === "Snow" ? (
        <h1 className="py-2">
        <i className="wi wi-day-snow display-1 weather-icon"/>
        </h1>             
    ) : props.main === "Haze" || props.main === "Hazy" || props.main === "Mist" ? (
        <h1 className="py-2">
        <i className="wi wi-day-cloudy display-1 weather-icon"/>
        </h1>             
    ) : <h1 className="py-2">
    <i className="wi wi-day-cloudy display-1 weather-icon"/>
    </h1>
}

export default Weather