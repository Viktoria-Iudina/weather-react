import React from "react";
import ActualDate from "./ActualDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./App.css";


export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            {/* Main : city, day, description, icon, units*/}
  
          <div className="city-name">
            <h1>{props.data.city}</h1>
          </div>
  
          <div className="dayAndTime">
            <div className="todayDay">
            <ActualDate date={props.data.date} />
            </div>
            <div className="todayDescription">
            <h4 className="description">{props.data.description}</h4>
            </div>
          </div>

          <div className="tempIcon">
              <div className="icon row">
                <div className="col pr-4">
                <WeatherIcon code={props.data.icon} size={75} />
                </div>
                <WeatherTemperature celsius={props.data.temp}/>
              </div>
          </div>

          {/* WeatherDescription */}
  
          <div className="weather-description">
        <div className="feels-like">
          <p>
            Feels like: <span>{Math.round(props.data.feelsLike)}°C</span>
          </p>
          <p>
            °C min: <span>{Math.round(props.data.tempMin)}°C</span>
          </p>
          <p>
            °C max: <span>{Math.round(props.data.tempMax)}°C</span>{" "}
          </p>
        </div>
  
        <div className="humid-wind-visib">
          <p>
            Humidity: <span>{props.data.humidity}%</span>
          </p>
          <p>
            Wind: <span>{props.data.wind} km/h</span>
          </p>
          <p>
            Visibility: <span>{props.data.visibility} km</span>{" "}
          </p>
        </div>
      </div>
        </div>
    );
} 