import React, { useEffect, useState } from 'react'
import "./Style.css"
import WeatherCard from './weatherCard';




const Temp = () => {


 const[searchValue, setSearchValue]= useState('pune');
 const[tempInfo, setTempInfo]= useState("");

 const getWeatherInfo = async ()=>{
     try{
         let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue }&unit=metric&appid=444e265d5e7d5494cd73ad5fa6921597`
        const res= await fetch(url);
        const data= await res.json();

        const { temp , humidity, pressure } = data.main;
        const {main: weathermood} = data.weather[0];
        const {speed}= data.wind;
        const {name}= data;
        const {country, sunset}= data.sys;

        const myNewWeather={
            temp,
            humidity,
            pressure,
            weathermood,
            name,
            speed,
            country,
            sunset
        };
        setTempInfo(myNewWeather);
        
        console.log(data);
     } catch(error){
         console.log(error)
         alert("City not found, Check spelling again")
     }

 }

 useEffect(() => {
     getWeatherInfo();
 },[]);

 
  return (
   <>
    <div className='wrap'>
    <div className='search'>
        <input 
        type="search" 
        placeholder='search...'
        autoFocus 
        id='search' 
        className='searchTerm'
        value={searchValue}
        onChange={(e)=> setSearchValue(e.target.value)}
    
        />
     
        <button className='searchButton' type='button' onClick={getWeatherInfo}>Search</button>
    </div>
    </div>

    <WeatherCard  tempInfo={tempInfo}/>
    <footer className='footer'>A Website By Hrishikesh Joshi,<br/>Using "Open Weather" API.</footer>
    </>
  )
}

export default Temp