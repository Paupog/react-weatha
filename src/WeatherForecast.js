import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props){

    let [loaded, setLoaded] = useState(false)
    let [forecast, setForecast] = useState(null);
    function handleResponse (response) {
        
        setForecast(response.data.daily);
        setLoaded(true);
    }


    
    if (loaded) {
        return (
            <div className="WeatherForecast">
                <div className="row">
                    <div className="col">
                      <WeatherForecastDay data={forecast[0]} />
                    </div>  
                </div>
            </div>
        )
        
    }else {
        let apiKey= "dfd0t6478f0367aa31fdf9o1c7ab1790";
        let apiUrl= `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;
        
        axios.get(apiUrl).then(handleResponse);

        return null; 
    }

    
}