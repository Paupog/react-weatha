import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props){
    function handleResponse (response) {
        console.log(response.data); 
    }


    let apiKey= "dfd0t6478f0367aa31fdf9o1c7ab1790";
    let apiUrl= `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}`;
    
    axios.get(apiUrl).then(handleResponse);
    
    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="WeatherForecast-day">Thu</div>
                   <WeatherIcon code="clear-sky-day" size={36}  />
                    <div className="WeatherForecast-temperature">
                        <span className="WeatherForecast-temperature-max">19°</span>
                        <span className="WeatherForecast-temperature-min">10°</span>
                    </div>
                </div>  
            </div>
        </div>
    )
}