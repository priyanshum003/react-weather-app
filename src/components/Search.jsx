import React, { useState } from 'react';
import { geoApiOptions, GEO_API_URL } from '../api';

const Search = ({ isSearchOpen, fetchWeatherData }) => {
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearchClose = () => {
        isSearchOpen(false);
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const cityName = search.toLowerCase(); // Convert to lowercase for case-insensitive comparison
            const response = await fetch(`${GEO_API_URL}?namePrefix=${cityName}`, geoApiOptions);
            const { data } = await response.json();

            if (data.length === 0) {
                // No city found
                setSearchResults([]);
            } else {
                // City(s) found
                setSearchResults(data);
            }
        } catch (error) {
            console.error(error);
        }
    }

    const handleCitySelect = (city) => {
        // Pass lat and lon back to the parent component
        fetchWeatherData(city.latitude, city.longitude);
        isSearchOpen(false);
    }

    const handleOnChange = (e) => {
        setSearch(e.target.value);
    }

    return (
        <div className='search'>
            <div className="close-btn" onClick={handleSearchClose}>
                <i className="material-icons">close</i>
            </div>

            <div>
                <form action="" className="search-location-container" onSubmit={handleFormSubmit}>
                    <div className='input-search-container'>
                        <span>
                            <i className="material-icons">search</i>
                        </span>
                        <input type="text" placeholder='Search location' value={search} onChange={handleOnChange} />
                    </div>
                    <button type="submit">Search</button>
                </form>

                <div className="search-results">
                    {searchResults.length === 0 ? (
                        <div>No city found</div>
                    ) : (
                        searchResults.map((city, index) => (
                            <button className="city-search-btn" key={index} onClick={() => handleCitySelect(city)}>
                                {city.name}, {city.country}
                                <span className='material-icons icon arrow-btn'>
                                    chevron_right
                                </span>
                            </button>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

export default Search;
