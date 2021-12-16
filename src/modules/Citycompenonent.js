import React from "react";
import "../App.css";

const perfectdayimage = {
  display: "flex",
  height: "140px",
  width: "140px",
  margin: "40px auto",
};
const Citycompenonent = ({ setCity, fetchWeather }) => {
  // const  = props;
  return (
    <div className="citycomponent">
      <img src="icons/perfect-day.svg" alt="not find" style={perfectdayimage} />
      <div className="chooselabel">Find weather of your city</div>
      <form type="submit" onSubmit={(e)=>fetchWeather(e)}>
        <input
          placeholder="Search city"
          className=" form-input"
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="btn" type={"submit"}>
          Search
        </button>
      </form>
    </div>
  );
};

export default Citycompenonent;
