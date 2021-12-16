// import React from "react";
import React, { useState } from "react";
import Axios from "axios";
import Citycompenonent from "./modules/Citycompenonent";
import Weathercomponent from "./modules/Weathercomponent";
import "./App.css";

function App() {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`,
      );
    console.log(response?.data);
  };

  return (
    <>
      <div className="main-app">
        <div className="app-label">React weather app</div>
        <Citycompenonent setCity={setCity} fetchWeather={fetchWeather} />
      </div>
    </>
  );
}

export default App;
