import React from 'react';

const Forecast = ({ data, temperatureUnit }) => {
    if (!data || !data.list || !Array.isArray(data.list) || data.list.length < 7) {
        return <div>No forecast data available</div>;
    }

    const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek).concat(WEEK_DAYS.slice(0, dayInAWeek));

    const celsiusToFahrenheit = (celsius) => {
        return ((celsius * 9 / 5) + 32).toFixed(2);
    };

    return (
        <div className='forecast-container'>
            <div className="daily-forecast">
                {data.list.slice(0, 5).map((dayData, index) => {
                    const minTemp = temperatureUnit === 'Celsius' ? Math.floor(dayData.main.temp_min) : Math.floor(celsiusToFahrenheit(dayData.main.temp_min));
                    const maxTemp = temperatureUnit === 'Celsius' ? Math.floor(dayData.main.temp_max) : Math.floor(celsiusToFahrenheit(dayData.main.temp_max));

                    return (
                        <div className="forecast-day" key={index}>
                            <h4>
                                {forecastDays[index]}
                            </h4>
                            <div className="forecast-img-container">
                                <img src={`icons/${dayData.weather[0].main}.png`} alt="" />
                            </div>
                            <div className="forecast-day-temperature">
                                <span>{minTemp}°{temperatureUnit === 'Celsius' ? 'C' : 'F'}</span>
                                <span>{maxTemp}°{temperatureUnit === 'Celsius' ? 'C' : 'F'}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Forecast;
