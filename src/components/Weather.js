import React, {useState } from "react";
import axios from "axios";

const Weather = () => {

const apiKey = "f838548d0ff46e6bcd4822461e7006aa"
const [data,setData] = useState({})
const [citydata,setCityData] = useState("")

const weatherData = (cityName) =>{
   
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="+ cityName +"&appid=" + apiKey
    axios.get(apiUrl).then((res) => {
        setData(res.data)
    })
}




const handleChange =(e)=> {
    setCityData(e.target.value)   
};


 const handleClick = ()=> {
    weatherData(citydata)
    
 };
 



  return (
    <div className="col-md-12">
      <div className="weatherbg">
        <h1 className="Heading">Weather App</h1>
        <div className="d-grid gap-3 col-4 mt-4">
          <input type="text" className="form-control " onChange={handleChange} />
          <button className="btn btn-primary" onClick={handleClick} type="button">
            Search
          </button>
        </div>
      </div>

      {Object.keys(data).length>0 &&
      <div className=" col-md-12 text-center mt-5">
          <div className="shadow rounded weatherResultBox">
              <img src="http://openweathermap.org/img/w/10d.png" alt="" />
              <h3 className="city">{data?.name}</h3>
              <h3 className="temp">{((data?.main?.temp)-273.15).toFixed(2)}° C</h3>
          </div>
      </div>
      }
    </div>
  );

};

export default Weather;
