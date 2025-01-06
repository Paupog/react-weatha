import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
       
      <div className="row mt-3">
        <div className="col-4">
          <div className="d-flex align-items-center">
            <WeatherIcon code={props.data.icon} size={54} />
            <div>
              <WeatherTemperature celsius={props.data.temperature} />
             
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="weatherDescription">
        <ul>
          <li>Perceived Temp: {props.data.perceivedTemperature}°C</li>
          <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
          </div>
        </div>
        <div className="col-4">
          <div className="cityName">
        <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      </div>
        </div>
       
      </div>
    </div>
  );
}
