import React from 'react';

const Highlights = ({ data }) => {
    if (!data || !data.main) {
        // Display a loading indicator or message
        return (
            <div className="main-section">
                <div className="loading-message">Loading...</div>
            </div>
        );
    }

    const degreesToCompass = (deg) => {
        const directions = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
        const index = Math.round(deg / 22.5) % 16;
        return directions[index];
    }

    return (
        <div className='highlight-section'>
            <h1>Today's Highlights</h1>
            <div className="highlights">
                <div className="highlights-sub-container-1">
                    <p className='title'>Wind Status</p>
                    <p className="stats">
                        <span className="value"> {data.wind.speed} </span>
                        <span className="unit">mph</span>
                    </p>
                    <div className='direction'>
                        <p className='navigation-icon' style={{ transform: `rotate(${data.wind.deg}deg)` }}>
                            <i className="material-icons">navigation</i>
                        </p>
                        {degreesToCompass(data.wind.deg)}
                    </div>
                </div>
                <div className="highlights-sub-container-1">
                    <p className='title'>Humidity</p>
                    <p className="stats">
                        <span className="value"> {data.main.humidity}</span>
                        <span className="unit">%</span>
                    </p>
                    <div className='humidity-percentage'>
                        <div className="humidity-percentage__labels">
                            <div className="label">0</div>
                            <div className="label">50</div>
                            <div className="label">100</div>
                        </div>
                        <div className="humidity-percentage__bar" style={{ width: `${data.main.humidity}%` }}>
                            <div className="filled_bar"></div>
                        </div>
                    </div>
                </div>
                <div className="highlights-sub-container">
                    <p className='title'>Visibility</p>
                    <p className="stats">
                        <span className="value"> {data.visibility / 1000} </span>
                        <span className="unit">KM</span>
                    </p>
                </div>
                <div className="highlights-sub-container">
                    <p className='title'>Atmospheric Pressure</p>
                    <p className="stats">
                        <span className="value"> {data.main.pressure} </span>
                        <span className="unit">hPa</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Highlights;
