import React, { useState } from 'react';
import './advancedstyle.css';
export default function AdvancedDetails(props) {
    let [displayed, setDisplayed] = useState(false);
    
    return (
        <>
                <button onClick={() => setDisplayed(!displayed)}>Toggle Advanced Weather Details</button>
        {displayed ? 
        <ul>
            <li>Wind Speed: {props.windSpeed}MPH</li>
            <li>Humidity: {props.humidity}%</li>
            <li>Pressure: {props.pressure}hPa</li>
        </ul>  
        : <></>} 
        </>    
    )
}

