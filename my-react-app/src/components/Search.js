import React from 'react'
import { useEffect, useState } from 'react';
const Search = () => {

    const [city, setCity] = useState('')
    const [weatherData, setWeatherData] = useState(null);
    const apiKey = '3ece5db27d82f1997817e7b484233ed1'; // My api key

  
    const fetchWeatherData = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
          setWeatherData(data);
          console.log(data); // Logs the data here
        })
        .catch(error => console.error('Error fetching data:', error));
    
      };
  return (
    <div>

<input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />       
<button


onClick={fetchWeatherData}
>Search</button>
{weatherData && (
        <div>
          <h2>Weather in {weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp} K</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      )}




    </div>
  )
}

export default Search