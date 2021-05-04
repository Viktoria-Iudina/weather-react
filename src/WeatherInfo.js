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
            <ActualDate date={props.data.date} />
          </div>

          <div className="tempIcon">
            <div className="iconDescript">
              <p className="description">{props.data.description}</p>
              <p className="icon">
                <WeatherIcon code={props.data.icon} size={58} />
              </p>
            </div>
  
          <WeatherTemperature celsius={props.data.temp}/>
          
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