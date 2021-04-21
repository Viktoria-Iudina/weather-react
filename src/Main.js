import React from "react";
import "./App.css";
import Search from "./Search";
import Signature from "./Signature";
import WeatherDescription from "./WeatherDescrption";

export default function Main() {
  let weatherData = {
    city: "Marseille",
    date: "Thursday, 26 March 13:00",
    description: "Sunny",
    degrees: "19",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png"
  };
  return (
    <div>
      <div className="body">
        <Search />

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

        <WeatherDescription />
      </div>
      <Signature />
    </div>
  );
}