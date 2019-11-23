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
      country: undefined
    };
    this.getWeather();
  }
  getWeather = async () => {
    const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${ApiKey}`)
    const response = await apiCall.json(); //converts it to json data
    console.log(response);
    this.setState({
      city: response.name,
      country: response.sys.country
    })
  }
  render() { return (
    <div className="App">
      Weather App
      <Weather city={this.state.city} country={this.state.country}/>
    </div>
  );
  }
}

export default App;
