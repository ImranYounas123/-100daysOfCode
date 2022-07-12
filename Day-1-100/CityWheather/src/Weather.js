import React , {useState,useEffect} from 'react';
const Weather = () =>{
const [data , setData] = useState('karachi');
const [city, setCity] = useState();

useEffect(() =>{
        const fetchData = async() =>{
            // const url = 'https://api.openweathermap.org/data/2.5/weather?q=karachi&units=metric&appid=03be01d6f07226fdc81553fab5ea9e33';
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${data}&units=metric&appid=03be01d6f07226fdc81553fab5ea9e33`;
            const responce = await fetch(url);
            const resJson = await responce.json();
            setCity(resJson.main);
            setCity(resJson.main)
            console.log(resJson.main);
            console.log("Imran");
            // console.log(responce.data.temp_min);
        }
        fetchData();
},[data]);
const handleData =(e) =>{
    e.preventDefault();
    setData(e.target.value)
}
// console.log(resJson.main);
    return(
        <>
        {
            !city ? (<h1>City Not Fount</h1>):
         <div>
             <span>Temp : {city.temp_max} 'C  </span>
             <span>Temp : {city.temp_min} 'C  </span>
         </div>
        }
        <h1>Weather City Data using APIs </h1>
        <input type = "search" placeholder="Enter City name" onChange = {(e)=> handleData(e)} />
        </>
    )
}
export default Weather;