import React from "react";
import "../App.css";
export const WeatherInfoIcons = {
  sunset: "/icons/temp.svg",
  sunrise: "/icons/temp.svg",
  humidity: "/icons/humidity.svg",
  wind: "/icons/wind.svg",
  pressure: "/icons/pressure.svg",
};
const Weatherinfocontainer=(props)=>{
  const {name,value}=props;
    return(
<div className="infocontainer">
    <img src={WeatherInfoIcons[name]} alt="" className="info-image" />
    <div className="infocontainertext">
      {value}
        <span>{name}</span>
    </div>
</div>)
}
const Weathercomponent = () => {
  return (
    <>
      <div className="weathercondition">
        <div className="check">
          <span className="temp">30C</span>
          <div className="cloudy">| cloudy</div>
          <img src="icons/perfect-day.svg" alt="can,t find" className="weather-img"  />
          
        </div>
        
        <div className="location">london,GB</div>
        <div className="Weatherinfo">
            weather info
        </div>
        <div className="weatherinfocontainer">
            <Weatherinfocontainer name="sunrise" value=""/> 
            <Weatherinfocontainer name="humidity" value=""/> 
            <Weatherinfocontainer name="wind" value=""/> 
            <Weatherinfocontainer name="pressure" value=""/> 
        </div>
      </div>
    </>
  );
};

export default Weathercomponent;
