import React from 'react';
import './App.css';
import Weather from './Weather.js'
import InputForm from './Form';

const ApiKey = 'c3905f7a93aa6ca2b8cf8e68b9d6e718';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: 'London',
      country: 'UK',
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
  getWeather = async e => {
    let city = this.state.city;

    const apiCall = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${this.state.city},uk&appid=${ApiKey}`
    )
    const response = await apiCall.json();
    console.log(response);
    this.setState({
      city: `${response.name}, ${response.sys.country}`,
      country: response.sys.country,
      cel: parseInt((response.main.temp - 273)),
      main: response.weather[0].description,
      temp_max: parseInt(response.main.temp_max - 273),
      temp_min: parseInt(response.main.temp_min - 273)
    })
  }

  submitFormHandler = e => {
    this.getWeather(e)
  }

  render() { 
    return this.state.city === undefined ?  
      <h1>Hmm... appears that either you made a typo or we don't track your city yet. Try en  tering your nearest large city</h1>
     :
     (
    <div className="App">
      Weather App
      {/* <InputForm/> */}
      <Weather city={this.state.city} country={this.state.country} cel={this.state.cel} main={this.state.main} temp_min={this.state.temp_min} 
      temp_max={this.state.temp_max}/>
      
        <form onSubmit={this.submitFormHandler}>
          <div>
          <label>Enter your city here: </label><input type="text" name="name"/>
          </div>
        </form>

    </div>
  );
  }
}

export default App;
