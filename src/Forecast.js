import React from "react";
import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function Forecast(props) {

    function handleResponse(response) {
        console.log(response.data);
    }
    console.log(props);

    let apiKey = "7ec53300c1e61afc2dfa56d235a9d50a";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(handleResponse);

  return (
<div className="WeatherForecast">
    <div className="row">
        <div className="col">
            <div className="WeatherForecast-day">
                Thu
            </div>
            <WeatherIcon code="01d" size={36} />
            <div className="WeatherForecast-temperatures">
                <span className="WeatherForecast-temperature-max">19°</span>
                <span className="WeatherForecast-temperature-min">10°</span>
            </div>
        </div>
    </div>
</div>
    );
  }

