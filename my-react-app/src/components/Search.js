import React from 'react'
import {  useState } from 'react';
import Button from 'react-bootstrap/Button';

const Search = () => {

    const [city, setCity] = useState('') //setiing city variable to be changed w useState
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

      const kelvinToFahrenheit = (kelvin) => {
        return ((kelvin - 273.15) * 9/5) + 32;
      };



  return (
    <div>
 

       <input

        style={{position:'absolute', right:"50%", top:'116px', fontFamily:'monospace', width:'250px',  border:'solid 3px black', height:'35px'}}
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />  


   <Button variant="secondary"

    style={{position:'absolute', right:"40%", top:'115px', fontFamily:'monospace', backgroundColor:'black', width:'180px'}}
    onClick={fetchWeatherData}
    >Get Weather</Button>


<div style={{backgroundColor:"white", position:"absolute", top:'18%', right:'35%', borderRadius:'30px', height:'550px', width:'550px'}}  >
    {weatherData ? (
        <>
            <h2   style={{position:'absolute', right:"22%", bottom:'74%', fontFamily:'monospace'}}>Weather in {weatherData.name}</h2>
            <p style={{position:'absolute', bottom:'46%', right:'33%', fontSize:'30px', fontFamily:'monospace'}}>Temp {kelvinToFahrenheit(weatherData.main.temp).toFixed(2)}F </p>
            <p style={{position:'absolute', bottom:'8%', right:'35%', fontSize:'25px', fontFamily:'monospace'}} >Weather: {weatherData.weather[0].description}</p>
            <img  style={{position:'absolute', bottom:'2%', right:'9%', height:'130px'}}
                src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
                alt={weatherData.weather[0].description}
            />
        </>
    ) : (
        <p style={{fontFamily:'monospace', position:'absolute', left:'25px'}}  >Awaiting City Request..</p>
    )}
</div>



</div>
 

  
  )
}

export default Search