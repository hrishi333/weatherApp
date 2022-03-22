import React, { useEffect, useState } from 'react'

const WeatherCard = ({tempInfo}) => {

    const[weatherState, setWeatherState]=useState("")
    const {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset
    }=tempInfo;

    useEffect(() =>{
        if(weathermood){
            switch(weathermood){
                case "Clouds" :
                    setWeatherState("wi-day-cloudy");
                    break;
                case "Haze" :
                        setWeatherState("wi-day-fog");
                        break;
                case "Clear" :
                            setWeatherState("wi-day-sunny");
                            break;
                case "Rain" :
                                setWeatherState("wi-day-rain");
                                break;              
                default : setWeatherState("wi-day-sunny");
                                break;   

            }
        }
    },[weathermood]);
    //converting the seconds into time
    let sec= sunset;
    let date= new Date(sec*1000)
    let timeStr =`${date.getHours()}:${date.getMinutes()}`;
  return (
   <>
   <article className='widget'>
        <div className='weatherIcon'>
            <i className={`wi ${weatherState}`}></i>

        </div>
        <div className='weatherInfo'>
        <div className='temperature'>
            <span>&nbsp;{Math.trunc(temp-273.15)}&deg;</span>
            <div className='weatherCondition'>&nbsp;{weathermood}</div>
            <div className='place'>{name}, {country}</div>
        </div>
        </div>

        <div className='date'>{new Date().toLocaleString('en-GB')}</div>
       
       
        {/* column section*/}
        <div className='extra-temp' >
            <div className='two-sided-section'>
            <p><i className='wi wi-sunset'></i></p> 
            <p><i className='extra-info-leftside'>Sunset<br/>
            {timeStr}
            </i></p>   
            </div>

            <div className='two-sided-section'>
            <p><i className='wi wi-humidity'></i></p> 
            <p><i className='extra-info-leftside'>Humidity <br/>
            {humidity}%
            </i></p>   
            </div>

            

            <div className='two-sided-section'>
            <p><i className='wi wi-rain'></i></p> 
            <p><i className='extra-info-leftside'>Pressure <br/>
            {pressure}&nbsp;hPa
            </i></p>   
            </div>

            <div className='two-sided-section'>
            <p><i className='wi wi-windy'></i></p> 
            <p><i className='extra-info-leftside'>Wind Speed <br/>
            {speed} m/s
            </i></p>   
            </div>

            
        </div>
    </article>
   </>
  )
}

export default WeatherCard