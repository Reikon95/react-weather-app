import React from 'react';
import './App.css';
import Weather from './Weather.js'

const ApiKey = 'c3905f7a93aa6ca2b8cf8e68b9d6e718';
// api.openweathermap.org/data/2.5/weather?q=London,uk



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      cel: undefined,
      temp_max: undefined,
      temp_min: undefined,
      description: "",
      error: false
    };
    this.getWeather();
  }
  getWeather = async () => {
    // const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${ApiKey}`)
    const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Santiago&appid=${ApiKey}`)

    const response = await apiCall.json(); //converts it to json data
    console.log(response);
    this.setState({
      city: response.name,
      country: response.sys.country,
      cel: parseInt((response.main.temp - 273)),
      main: response.weather[0].description,
      temp_max: parseInt(response.main.temp_max - 273),
      temp_min: parseInt(response.main.temp_min - 273)
    })
  }
  render() { return (
    <div className="App">
      Weather App
      <Weather city={this.state.city} country={this.state.country} cel={this.state.cel} main={this.state.main} temp_min={this.state.temp_min} 
      temp_max={this.state.temp_max}/>
    </div>
  );
  }
}

export default App;
