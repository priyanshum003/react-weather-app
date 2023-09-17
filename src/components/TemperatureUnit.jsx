import React from 'react'

const TemperatureUnit = ({ setTemperatureUnit }) => {
    const toggleToCelsius = () => {
        setTemperatureUnit('Celsius');
    };

    const toggleToFahrenheit = () => {
        setTemperatureUnit('Fahrenheit');
    };
    return (
        <div className="temprature-unit-container">
            <div className="temprature-unit celsius" onClick={toggleToCelsius}>
                °C
            </div>
            <div className="temprature-unit farenheit" onClick={toggleToFahrenheit}>
                °F
            </div>
        </div>
    )
}

export default TemperatureUnit