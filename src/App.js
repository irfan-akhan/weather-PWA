import React, { useState } from 'react';
import { fetchWeater } from './api/fetchWeather';

import './App.css';

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [weather, setWeather] = useState({});

    const searchHandler = async () => {
        const weatherData = await fetchWeater(searchTerm);
        setWeather(weatherData);
        console.log(weatherData);
        setSearchTerm('');
    };

    return (
        <div className="main-container">
            <input
                type="text"
                className="search"
                placeholder="Search..."
                value={searchTerm}
                onChange={e => {
                    setSearchTerm(e.target.value);
                }}
                onKeyPress={e => {
                    if (e.key === 'Enter') {
                        searchHandler();
                    }
                }}
            />
            {weather.main && (
                <div className="city">
                    <h2 className="city-name">
                        <span>{weather.name}</span>
                        <sup> {weather.sys.country}</sup>
                    </h2>
                    <div className="city-temp">
                        <span>{Math.round(weather.main.temp)}</span>
                        <sup>&deg;C</sup>
                    </div>
                    <div className="info">
                        <img
                            className="city-icon"
                            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                            alt={weather.weather[0].description}
                        />
                        <p>{weather.weather[0].description}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;
