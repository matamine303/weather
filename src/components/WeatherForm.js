import React from 'react';

// component that handles the input of city and country for weather
class WeatherForm extends React.Component {

    render() {
        return (
            <fieldset>
                <form onSubmit={this.props.getWeather}>
                    <input type="text" name="city" placeholder="City..." />
                    <input type="text" name="country" placeholder="Country..." />
                    <button>Get Weather</button>
                </form>
            </fieldset>
        );
    }

}

export default WeatherForm;
