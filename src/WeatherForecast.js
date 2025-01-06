import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props){

    let [loaded, setLoaded] = useState(false)
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded (false);

    }, [props.city]);
    


    function handleResponse (response) {
    
         setForecast(response.data.daily);
        setLoaded(true);
    }


    
    if (loaded) {
        console.log(forecast);
        return (
            <div className="WeatherForecast">
            <div className="row">
              {forecast.map(function (dailyForecast, index) {
                if (index < 5) {
                  return (
                    <div className="col" key={index}>
                      <WeatherForecastDay data={dailyForecast} />
                    </div>
                  );
                }
              })}
            </div>
          </div>
        );
    }else {
        let apiKey= "dfd0t6478f0367aa31fdf9o1c7ab1790";
        let apiUrl= `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;
        
        axios.get(apiUrl).then(handleResponse);

        return null; 
    }

    
}