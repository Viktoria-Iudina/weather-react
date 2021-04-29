import React from "react";
import "./Forecast.css";

export default function Forecast() {
  let weatherDetails = {
    description: "Sunny",
    iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png"
  };
  return (
<div className="row" id="forecast">
        <p className="col-2 tabForecast">
            hour <br /> °C<img className="iconForecast" src={weatherDetails.iconUrl} alt={weatherDetails.description} />
        </p>

        <p className="col-2 tabForecast">
            hour <br /> °C<img className="iconForecast" src={weatherDetails.iconUrl} alt={weatherDetails.description} /> 
        </p>
        <p className="col-2 tabForecast">
            hour <br /> °C<img className="iconForecast" src={weatherDetails.iconUrl} alt={weatherDetails.description} /> 
        </p>
        <p className="col-2 tabForecast">
            hour <br /> °C<img className="iconForecast" src={weatherDetails.iconUrl} alt={weatherDetails.description} /> 
        </p>
        <p className="col-2 tabForecast">
            hour <br /> °C<img className="iconForecast" src={weatherDetails.iconUrl} alt={weatherDetails.description} /> 
        </p>
    </div>
    );
  }