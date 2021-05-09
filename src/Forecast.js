import React, { useState } from "react";
import "./Forecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function Forecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function handleResponse(response) {
        console.log(response.data);
        setForecast(response.data.daily);
        setLoaded(true);
    }
    
    if (loaded) {
        console.log(forecast);
        return (
        <div className="WeatherForecast">
            <div className="row">
                {forecast.map(function (dailyForecast, index){
                    if (index < 6) {
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
        } else {
        let apiKey = "735adde991f0a3263e9a14037efe90bf";
        let latitude = props.coordinates.lat;
        let longitude = props.coordinates.lon;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        
        axios.get(apiUrl).then(handleResponse);

    return null;
    }
}