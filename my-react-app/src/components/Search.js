import React from 'react'
import { useEffect, useState } from 'react';
const Search = () => {


    const [weatherData, setWeatherData] = useState({});
    const apiKey = '3ece5db27d82f1997817e7b484233ed1'; // My api key
    const city = 'New York'; 
  
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
<button
onClick={fetchWeatherData}
></button>

    </div>
  )
}

export default Search