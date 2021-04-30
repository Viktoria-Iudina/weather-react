import React, { useState } from 'react';
import axios from 'axios';
import Loader from "react-loader-spinner";

export default function Weather(props) {
    
    let [temperature, setTemperature] = useState(null);
    function handleResponse(response) {
        setTemperature(response.data.main.temp); 
    }

    if (temperature) {
        return <h4>The temperature in {props.city} is {Math.round(temperature)}°C</h4>
    } else {
        let apiKey = "735adde991f0a3263e9a14037efe90bf";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}a&units=metric`;
        
        axios.get(apiUrl).then(handleResponse); 
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