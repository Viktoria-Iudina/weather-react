import React from "react";
import axios from "axios";
import "./App.css";
import Signature from "./Signature";
import Forecast from "./Forecast";

export default function Main() {
  let weatherData = {
    city: "Marseille",
    date: "Thursday, 26 March 13:00",
    description: "Sunny",
    degrees: "19",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png"
  };
  let descriptionData = {
    feelsLike: "15°C",
    tempMin: "12°C",
    tempMax: "19°C",
    humidity: "50%",
    wind: "ono 20 km/h",
    visibility: "19,3 km"
  };
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

       {/* Main */}

        <div className="city-name">
          <h2>{weatherData.city}</h2>
        </div>

        <div className="dayAndTime">
          <h4>{weatherData.date}</h4>
        </div>

        <div className="tempIcon">
          <div className="iconDescript">
            <p className="description">{weatherData.description}</p>
            <p className="icon">
              <img src={weatherData.imgUrl} alt={weatherData.description} />
            </p>
          </div>

          <div className="tempUnits">
            <span className="temperature">{weatherData.degrees} </span>
            <span className="units">
              <a href="/">°C</a> |<a href="/">°F</a>
            </span>
          </div>
        </div>

        {/* WeatherDescription */}

        <div className="weather-description">
      <div className="feels-like">
        <p>
          Feels like: <span>{descriptionData.feelsLike}</span>
        </p>
        <p>
          °C min: <span>{descriptionData.tempMin}</span>
        </p>
        <p>
          °C max: <span>{descriptionData.tempMax}</span>{" "}
        </p>
      </div>

      <div className="humid-wind-visib">
        <p>
          Humidity: <span>{descriptionData.humidity}</span>
        </p>
        <p>
          Wind: <span>{descriptionData.wind}</span>
        </p>
        <p>
          Visibility: <span>{descriptionData.visibility}</span>{" "}
        </p>
      </div>
    </div>

        <Forecast />
      </div>
      <Signature />
    </div>
  );
}