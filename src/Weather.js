import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import './Weather.css';

export default function Weather(){
    
    const [weatherData, setWeatherData] = useState({ready: false});
    function handleResponse (response) {
        console.log(response.data);
        setWeatherData ({
            ready: true,
            temperature: Math.round(response.data.temperature.current),
            humidity: response.data.temperature.humidity,
            date: new Date(response.data.time * 1000),
            iconUrl: 'https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png',
            description: response.data.condition.description,
            wind: response.data.wind.speed,
            city: response.data.city, 
        });
    }


    if (weatherData.ready){
        return ( 
            <div className="Weather"> 
            <form> 
                <div className="row">
                    <div className="col-9">
                <input 
                type="search" 
                placeholder="Enter a city.." 
                className="form-control" 
                autoFocus />
                </div>
                    <div className="col-3">    
                <input 
                type="submit" 
                value="Search" 
                className="btn btn-primary w-100"/>
                </div>
                </div>
            </form>
            <h1>{weatherData.city} </h1>
            <ul>
                <li>
                    <FormattedDate date={weatherData.date} />
                     </li>
                <li className="text-capitalize">
                    {weatherData.description} </li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix">
                    <img 
                    src= {weatherData.iconUrl}
                    alt={weatherData.description}
                    className="float-left"
                    />
                    
                    <span className="temperature">{weatherData.temperature} </span> 
                    <span className="unit">°C</span>
                    </div>
                    </div>
                     <div className="col-6">
                        <ul>
                            <li>Humidity:{weatherData.humidity} %</li>
                            <li>Wind:{weatherData.wind} km/h </li>
                        </ul>
                     </div>
            </div>
            </div>
        )
    } else {
        const apiKey= "dfd0t6478f0367aa31fdf9o1c7ab1790";
        let city = "New York";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    
        axios.get(apiUrl).then(handleResponse);
    

        return "Loading..."
    }

    
   
}