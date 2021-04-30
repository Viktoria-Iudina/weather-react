import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Signature from "./Signature";
import Forecast from "./Forecast";

export default function Main(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  function handleResponse(response) {
    console.log(response.data);
  setWeatherData({
    ready: true,
    city: response.data.name,
    date: "Friday, 30 April",
    temp: response.data.main.temp,
    description: response.data.weather[0].description,
    icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    feelsLike: response.data.main.feels_like,
    tempMin: response.data.main.temp_min,
    tempMax: response.data.main.temp_max,
    wind: response.data.wind.speed,
    humidity: response.data.main.humidity,
    visibility: response.data.visibility
  });

  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="body">
  
          {/* SearchEngine */}
     
          <div className="Search">
          <form>
            <div className="row">
              <div className="col-8">
                <input
                  type="text"
                  placeholder="Search City..."
                  autoFocus="on"
                  className="form-control"
                />
              </div>
  
              <div className="col-4">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary shadow-sm"
                />
              </div>
  
              <div className="col-4">
                <input
                  className="current-location btn btn-outline-primary shadow-sm"
                  type="submit"
                  value=" 📍  "
                />
              </div>
            </div>
          </form>
        </div>
  
         {/* Main : city, day, description, icon, units*/}
  
          <div className="city-name">
            <h1>{weatherData.city}</h1>
          </div>
  
          <div className="dayAndTime">
            <h4>{weatherData.date}</h4>
          </div>
  
          <div className="tempIcon">
            <div className="iconDescript">
              <p className="description">{weatherData.description}</p>
              <p className="icon">
                <img src={weatherData.icon} alt={weatherData.description} />
              </p>
            </div>
  
            <div className="tempUnits">
              <span className="temperature">{Math.round(weatherData.temp)}</span>
              <span className="units">
                <a href="/">°C</a> |<a href="/">°F</a>
              </span>
            </div>
          </div>
  
          {/* WeatherDescription */}
  
          <div className="weather-description">
        <div className="feels-like">
          <p>
            Feels like: <span>{Math.round(weatherData.feelsLike)}°C</span>
          </p>
          <p>
            °C min: <span>{Math.round(weatherData.tempMin)}°C</span>
          </p>
          <p>
            °C max: <span>{Math.round(weatherData.tempMax)}°C</span>{" "}
          </p>
        </div>
  
        <div className="humid-wind-visib">
          <p>
            Humidity: <span>{weatherData.humidity}%</span>
          </p>
          <p>
            Wind: <span>{weatherData.wind} km/h</span>
          </p>
          <p>
            Visibility: <span>{weatherData.visibility} km</span>{" "}
          </p>
        </div>
      </div>
  
          <Forecast />
        </div>
        <Signature />
      </div>
    );
  } else {
    const apiKey = "7ec53300c1e61afc2dfa56d235a9d50a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
    }