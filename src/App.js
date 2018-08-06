import React from 'react';
import './App.css';
import WeatherForm from './components/WeatherForm.js';
import WeatherDisplay from './components/WeatherDisplay.js';
import WeatherTitle from './components/WeatherTitle.js';

const API_KEY = 'e70d793e9a5cb9d54ba393820c4ea441';

class App extends React.Component {

    state = {
        temperature: undefined,
        tempMin: undefined,
        tempMax: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        windSpeed: undefined,
        description: undefined,
        error: undefined
    }

    getWeather = async (event) => {
        event.preventDefault();

        const city = event.target.elements.city.value;
        const country = event.target.elements.country.value;

        const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&mode=json&appid=${API_KEY}&units=metric`);
        const data = await apiCall.json();

        if (city && country) {
            console.log(data);
            this.setState({
                temperature: data.main.temp,
                tempMin: data.main.temp_min,
                tempMax: data.main.temp_max,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                description: data.weather[0].description,
                error: ''
            });
        }
        else {
            this.setState({
                temperature: undefined,
                tempMin: undefined,
                tempMax: undefined,
                city: undefined, 
                country: undefined,
                humidity: undefined,
                windSpeed: undefined, 
                description: undefined,
                error: 'Please enter the city and country.'
            });
        }
    }

    render() {
        return (
            <div className="App">
                <div class="wrapper">
                    <div class="main">
                        <div class="container">
                            <div class="row">
                                <div class="col-xs-5 title-container">
                                    <WeatherTitle />
                                </div>
                                <div class="col-xs-7 form-container">
                                    <WeatherForm getWeather={this.getWeather} />
                                    <WeatherDisplay
                                        temperature={this.state.temperature}
                                        tempMin={this.state.tempMin}
                                        tempMax={this.state.tempMax}
                                        city={this.state.city}
                                        country={this.state.country}
                                        humidity={this.state.humidity}
                                        windSpeed={this.state.windSpeed}
                                        description={this.state.description}
                                        error={this.state.error}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default App;
