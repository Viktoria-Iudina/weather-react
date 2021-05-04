import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Signature from "./Signature";
import Forecast from "./Forecast";
import WeatherInfo from "./WeatherInfo";
import Loader from "react-loader-spinner";

export default function Main(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
  setWeatherData({
    ready: true,
    city: response.data.name,
    date: new Date(),
    temp: response.data.main.temp,
    description: response.data.weather[0].description,
    icon: response.data.weather[0].icon,
    feelsLike: response.data.main.feels_like,
    tempMin: response.data.main.temp_min,
    tempMax: response.data.main.temp_max,
    wind: response.data.wind.speed,
    humidity: response.data.main.humidity,
    visibility: response.data.visibility
  });
}

function handleSubmit(event) {
  event.preventDefault();
  search(city);
}
function handleCityChange(event) {
  setCity(event.target.value);
}

function search() {
    const apiKey = "735adde991f0a3263e9a14037efe90bf";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }



  if (weatherData.ready) {
    return (
      <div className="Main">
        <div className="body">
  
          {/* SearchEngine */}
     
          <div className="Search">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-7">
                <input
                  type="text"
                  placeholder="Enter a city..."
                  autoFocus="on"
                  className="form-control"
                  onChange={handleCityChange}
                />
              </div>
  
              <div className="col-2">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary shadow-sm"
                />
              </div>
  
              <div className="col-2">
                <input
                  className="current-location btn btn-outline-primary shadow-sm"
                  type="submit"
                  value=" 📍  "
                />
              </div>
            </div>
          </form>
        </div>
        <WeatherInfo data={weatherData}/>
          <Forecast />
        </div>
        <Signature />
      </div>
    );
  } else {
    search();
    return (
    <Loader
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000} 
      />
    );
  }
    }