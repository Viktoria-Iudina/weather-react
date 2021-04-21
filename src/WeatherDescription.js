import React from "react";
import "./App.css";
import "./WeatherDescription.css";

export default function WeatherDescription() {
  let descriptionData = {
    feelsLike: "15°C",
    tempMin: "12°C",
    tempMax: "19°C",
    humidity: "50%",
    wind: "ono 20 km/h",
    visibility: "19,3 km"
  };
  return (
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
  );
}