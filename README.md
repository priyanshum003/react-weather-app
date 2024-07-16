# React Weather App

A React-based weather application that displays current weather and forecast data for a selected location. The app allows users to search for locations, use their current location, and switch between Celsius and Fahrenheit temperature units.

![image](https://github.com/user-attachments/assets/cd037c12-f3b7-4987-977d-e8570d6e0de1)


## Features

- Displays current weather information including temperature, weather condition, and location.
- Provides a 5-day weather forecast.
- Users can search for any location.
- Users can use their current location to get weather data.
- Switch between Celsius and Fahrenheit units.
- Responsive design.

## Technologies Used

- React
- JavaScript (ES6+)
- CSS
- OpenWeatherMap API for weather data
- GeoDB Cities API for location search

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v12 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/react-weather-app.git
   cd react-weather-app
    ```
    
2. Install dependencies:
    ```bash
    npm install
    ```
    
3. Create a .env file in the root directory and add your API keys:
    ```
    REACT_APP_WEATHER_API_KEY=your_openweathermap_api_key
    REACT_APP_GEO_API_URL=https://wft-geo-db.p.rapidapi.com/v1/geo/cities
    REACT_APP_GEO_API_KEY=
    ```
4. Start the development server:
    ```
    npm start
    ```
    
## Directory Structure

```
react-weather-app/
├── public/
│   ├── icons/
│   │   ├── Clear.png
│   │   ├── Clouds.png
│   │   ├── ...
│   └── index.html
├── src/
│   ├── api.js
│   ├── components/
│   │   ├── Credit.js
│   │   ├── Forecast.js
│   │   ├── Highlights.js
│   │   ├── Nav.js
│   │   ├── Search.js
│   │   ├── TemperatureUnit.js
│   │   └── WeatherCard.js
│   ├── pages/
│   │   └── IndexPage.js
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   └── index.js
└── .env
```

## Usage
- Search for a Location: Click on the "Search for places" button, enter the location name, and select from the search results.
- Use Current Location: Click on the location icon to fetch weather data for your current location.
- Switch Temperature Units: Click on °C or °F buttons to switch between Celsius and Fahrenheit.

## Components

- **App**: The main application component.
- **IndexPage**: The main page component containing all weather information and controls.
- **Credit**: Displays credit information.
- **Forecast**: Displays the 5-day weather forecast.
- **Highlights**: Displays weather highlights such as wind status, humidity, visibility, and pressure.
- **Nav**: Navigation component with search and location buttons.
- **Search**: Component for searching locations.
- **TemperatureUnit**: Component for switching temperature units.
- **WeatherCard**: Displays current weather information.

## API Configuration

- **OpenWeatherMap API**:
    - Sign up at [OpenWeatherMap](https://openweathermap.org/) and get your API key.
    - Add your API key to the `.env` file:
        ```env
        REACT_APP_WEATHER_API_KEY=your_openweathermap_api_key
        ```

- **GeoDB Cities API**:
    - Sign up at [RapidAPI](https://rapidapi.com/wirefreethought/api/geodb-cities) and subscribe to the GeoDB Cities API.
    - Add your API key and the base URL to the `.env` file:
        ```env
        REACT_APP_GEO_API_URL=https://wft-geo-db.p.rapidapi.com/v1/geo/cities
        REACT_APP_GEO_API_KEY=your_rapidapi_key
        ```

## Contributing
Feel free to submit issues and enhancement requests.
- Fork the repository.
- Create a new branch (git checkout -b feature-branch).
- Commit your changes (git commit -m 'Add some feature').
- Push to the branch (git push origin feature-branch).
- Create a new Pull Request.

## Acknowledgements


- [OpenWeatherMap](https://openweathermap.org/) for the weather API.
- [GeoDB Cities API](https://rapidapi.com/wirefreethought/api/geodb-cities) for the location search API.
- [DevChallenges.io](https://devchallenges.io/) for inspiration.

