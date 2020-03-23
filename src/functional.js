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
        const response = await apiCall.json();
        console.log(response);
        setForecast({
            city: `${response.name}`,
            country: response.sys.country,
            cel: parseInt((response.main.temp - 273)),
            main: response.weather[0].main,
            temp_max: parseInt(response.main.temp_max - 273),
            temp_min: parseInt(response.main.temp_min - 273),
            windSpeed: parseInt(response.wind.speed),
            humidity: parseInt(response.main.humidity),
            pressure: parseInt(response.main.pressure)
          })
    }
    function submitFormHandler(e) {
        e.preventDefault();
        const cityInput = document.querySelector('.cityInput').value;
        console.log('the input value is: ', cityInput);  
        setForecast({
          city: cityInput
        }, () => getWeather(forecast.city) )
    }
    return (
        forecast.city === undefined ? 
        <h1>Hmm... appears that either you made a typo or we don't track your city yet. Try en  tering your nearest large city</h1>

        :
     
    <div className="App">
      Cam Blackwood's Weather App
      <Weather city={forecast.city} country={forecast.country} cel={forecast.cel} main={forecast.main} temp_min={forecast.temp_min} 
      temp_max={forecast.temp_max}/>
      
        <form onSubmit={(e) => this.submitFormHandler(e)}>
          <div>
          <label>Enter your city here: </label><input className="cityInput" type="text"/>
          </div>
        </form>
        <AdvancedDetails windSpeed={forecast.windSpeed} humidity={forecast.humidity} pressure={forecast.pressure}/>
        
    </div>
  )
  
     }


