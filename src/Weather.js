import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import './Weather.css';

export default function Weather(props){
    
    const [weatherData, setWeatherData] = useState({ready: false});
    const [city, setCity] = useState(props.defaultCity);
    function handleResponse (response) {
        console.log(response.data);
        setWeatherData ({
            ready: true,
            temperature: Math.round(response.data.temperature.current),
            humidity: response.data.temperature.humidity,
            date: new Date(response.data.time * 1000),
            icon: response.data.condition.icon,
            description: response.data.condition.description,
            wind: response.data.wind.speed,
            city: response.data.city, 
            perceivedTemperature: Math.round(response.data.temperature.feels_like),
        });
    }


    function search(){
        const apiKey= "dfd0t6478f0367aa31fdf9o1c7ab1790";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    
        axios.get(apiUrl).then(handleResponse);
    
    }

    function handleSubmit(event){
        event.preventDefault();
        search();
        }

    function handleCityChange(event){
        setCity(event.target.value);
    }

    if (weatherData.ready){
        return ( 
            <div className="Weather"> 
            <form onSubmit={handleSubmit}> 
                <div className="row">
                    <div className="col-9">
                <input 
                type="search" 
                placeholder="Enter a city.." 
                className="formStyle form-control" 
                autoFocus 
                onChange= {handleCityChange}
                />
                </div>
                    <div className="col-3">    
                <input 
                type="submit" 
                value="Search" 
                className="button"/>
                </div>
                </div>
            </form>
            <WeatherInfo data={weatherData} />
            <WeatherForecast city={weatherData.city} />
            </div>
        );
    } else {
        search();
       return "Loading...";
    }

    
   
}