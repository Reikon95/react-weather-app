import React, { useState } from 'react';
export default function AdvancedDetails(props) {
    let [displayed, setDisplayed] = useState(false);
    
    return (
        <>
        
        <button onClick={() => setDisplayed(!displayed)}>Display Advanced Weather Details</button>
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

