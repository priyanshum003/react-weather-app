import React, { useEffect, useState } from 'react';
import Credit from '../components/Credit';
import Forecast from '../components/Forecast';
import Highlights from '../components/Highlights';
import WeatherCard from '../components/WeatherCard';
import Nav from '../components/Nav';
import { WEATHER_API_KEY, WEATHER_API_URL } from '../api';
import TemperatureUnit from '../components/TemperatureUnit';


const IndexPage = () => {
    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecast, setForecast] = useState(undefined);
    const [temperatureUnit, setTemperatureUnit] = useState('Celsius'); // Default to Celsius

    const fetchWeatherData = async (lat, lon) => {
        const currentWeatherFetch = fetch(
            `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
        );
        const forecastFetch = fetch(
            `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
        );

        try {
            const [currentWeatherResponse, forecastResponse] = await Promise.all([
                currentWeatherFetch.then(response => response.json()),
                forecastFetch.then(response => response.json())
            ]);

            setCurrentWeather(currentWeatherResponse);
            setForecast(forecastResponse);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchInitialData = async () => {
        await fetchWeatherData(23.25, 77.416666666);
    };

    useEffect(() => {
        fetchInitialData();
    }, []);

    return (
        <div className="container">
            <div className="nav-main">
                <Nav fetchWeatherData={fetchWeatherData} />
                <WeatherCard data={currentWeather} temperatureUnit={temperatureUnit} />
            </div>
            <div className="forecast-highlights">
                <TemperatureUnit setTemperatureUnit={setTemperatureUnit} />
                <Forecast data={forecast} temperatureUnit={temperatureUnit} />
                <Highlights data={currentWeather} />
                <Credit />
            </div>
        </div>
    );
};

export default IndexPage;
