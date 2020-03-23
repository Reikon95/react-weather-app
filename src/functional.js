import React, { useState } from 'react';
import './App.css';
import Weather from './Weather.js'
import AdvancedDetails from './AdvancedDetails.js';
export default function FApp() {
    const ApiKey = 'c3905f7a93aa6ca2b8cf8e68b9d6e718';
    let [forecast, setForecast] = useState({
        city: 'London',
        country: 'UK',
        icon: undefined,
        main: undefined,
        cel: undefined,
        temp_max: undefined,
        temp_min: undefined,
        description: "",
        error: false
      })
    async function getWeather(city) {
        const apiCall = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}`
        )
    }
}