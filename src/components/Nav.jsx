import React, { useState } from 'react'
import Search from './Search';

const Nav = ({ fetchWeatherData }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSearchBtnClick = (e) => {
        e.preventDefault();
        setIsModalOpen(true)
    }

    const handleGetWeather = () => {
        if (navigator.geolocation) {
            // Request location permission
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    // Success callback - position contains location data
                    const { latitude, longitude } = position.coords;
                    fetchWeatherData(latitude, longitude)
                },
                (error) => {
                    // Error callback - handle errors
                    switch (error.code) {
                        case error.PERMISSION_DENIED:
                            console.error('User denied the request for location permission.');
                            break;
                        case error.POSITION_UNAVAILABLE:
                            console.error('Location information is unavailable.');
                            break;
                        case error.TIMEOUT:
                            console.error('The request to get location timed out.');
                            break;
                        case error.UNKNOWN_ERROR:
                            console.error('An unknown error occurred.');
                            break;
                        default:
                            console.error('An error occurred while requesting location permission:', error);
                    }
                }
            );
        } else {
            console.error('Geolocation is not supported by your browser.');
        }

    }

    return (
        <nav>
            {!isModalOpen ? (
                <>
                    <div className="btn-container" onClick={handleSearchBtnClick}>
                        <button className="search-btn">
                            Search for places
                        </button>
                    </div>
                    <div title="Search with Location" className="location" onClick={handleGetWeather}>
                        <i className="material-icons">my_location</i>
                    </div>
                </>
            ) : (<Search
                isSearchOpen={setIsModalOpen}
                fetchWeatherData={fetchWeatherData}
            />)}
        </nav>
    )
}

export default Nav