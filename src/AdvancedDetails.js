import React, { useState } from 'react';
export default function AdvancedDetails(props) {
    let [displayed, setDisplayed] = useState(false);
    
    return (
        <>
        
        <button onClick={() => setDisplayed(!displayed)}>Display Advanced Weather Details</button>
        {displayed ? 
        <p>Check back later - functionality not available yet</p>    
        : <></>} 
        </>    
    )
}

