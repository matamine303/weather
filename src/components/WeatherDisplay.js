import React from 'react';

// component that displays the weather data
class WeatherDisplay extends React.Component {

    render() {
        return (
            <div className="weather__info">
                {this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p>}
                {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
                {this.props.tempMin && <p>Min Temperature: {this.props.tempMin}</p>}
                {this.props.tempMax && <p>Max Temperature: {this.props.tempMax}</p>}
                {this.props.humidity && <p>Humidity: {this.props.humidity}%</p>}
                {this.props.windSpeed && <p>Wind Speed: {this.props.windSpeed}</p>}
                {this.props.description && <p>Description: {this.props.description}</p>}
            </div>
        );
    }

}

export default WeatherDisplay;
