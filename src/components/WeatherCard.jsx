import React from 'react';

const WeatherCard = ({ data, temperatureUnit }) => {
    if (!data || !data.main) {
        return (
            <div className="main-section">
                <div className="loading-message">Loading...</div>
            </div>
        );
    }

    const { main, weather, name, dt } = data;
    const { temp } = main;

    const date = new Date(dt * 1000);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);

    const capitalizeFirstLetterOfWord = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    const celsiusToFahrenheit = (celsius) => {
        return ((celsius * 9 / 5) + 32).toFixed(2);
    };

    const temperatureValue = temperatureUnit === "Celsius" ? Math.floor(temp) : Math.floor(celsiusToFahrenheit(temp));

    return (
        <div className="main-section">
            <div className='main'>
                <div className='img-container'>
                    <img src={`icons/${data.weather[0].main}.png`} alt="" />
                </div>
                <div className="current-status">
                    <div className="temprature">
                        <h1>
                            <span className='temprature-value'>{temperatureValue}</span>
                            <span className='temprature-unit'> {temperatureUnit === 'Celsius' ? '°C' : '°F'}</span>
                        </h1>
                    </div>

                    <div className="weather">
                        <h2>
                            {capitalizeFirstLetterOfWord(weather[0].description)}
                        </h2>
                    </div>

                    <div className='date-container'>
                        <div className='date'>
                            <span>{formattedDate}</span>
                        </div>
                        <div className='city'>
                            <i className="material-icons">location_on</i> {name}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeatherCard;
