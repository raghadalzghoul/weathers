import React from 'react'
import './WeatherApp.css'
import search_icon from'../Assets/search.svg'
import cloudy_icon from'../Assets/cloudy.jpg'
import drizzle_icon from'../Assets/drizzle.png'
import rainy_icon from'../Assets/rainy.jpg'
import sunny_icon from'../Assets/sunny.jpg'
import snow_icon from'../Assets/snow.jpg'
import windy_icon from'../Assets/windy.jpg'

const WeatherApp =async()=>{

    let api_key="0b98c70fbd867783c1d657da6d8a297f";
    const search =()=>{
const element =document.fetElementsByClassName("cityInput")
    if(element[0].value==="")
    {
        return 0;
    }
        let url= `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=0b98c70fbd867783c1d657da6d8a297f=${api_key}`;
       let response=  fetch(url);
        let data=  response.json();
        const humidity =document.getElementsByClassName("humidity-percent");
  const wind =document.getElementsByClassName("wind-rate");
 
 const temprature=documnet.getElementsByClassName("weather-temp");
  
const location =document.getElementsByClassName("weather-location")
humidity[0].innerHTML=data.main.humidity+" %";
wind[0].innerHTML=data.wind.speed+"km/h ";
temprature[0].innerHTML=data.main.temp+"C";
location[0].innerHTML=data.name;
}
    return(
<div className='container'>
<div className="top-bar">

    <input type="text" className="cityInput" placeholder="search"/>
    <div className="search-icon" onClick={()=>{search()}}>
       <img src={search_icon}  alt=""/>
    </div>
</div>
<div className="weather-image">
    <img src={cloud_icon} alt=""/>

</div>
<div className="weather-temp">24 c</div>
<div className="weather-location">London</div>
<div className="data-contaier">
   <div className='element' >
    <img src={ humidity_icon} alt=" " className="icon" />
    <div className='data'>
        <div className="humidity-percent">64%</div>
        <div className='text'>Humidity</div>
    </div>
   </div>

   <div className='element' >
    <img src={Wind_icon} alt=" " className="icon" />
    <div className='data'>
        <div className="wind-rate">18 km/h</div></div>
        <div className='text'>Wind speed</div>
        </div>
</div>
</div>




    )
}
export default WeatherApp