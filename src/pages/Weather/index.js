import React, {useState} from 'react';
import axios from "axios";
// import dotenv from "dotenv";
// dotenv.config();

import { Container } from "react-bootstrap";
import MainWeatherWindow from './components/MainWeatherWindow';
import CityInput from './components/CityInput';
import WeatherBox from './components/WeatherBox';

import "./style.css";

export default function Weather() {
  // const [city, setCity] = useState(undefined);
  const [city, setCity] = useState("");
  const [days, setDays] = useState(new Array(5));

  // creates the day objects and updates the state
  const updateState = data => {
    const city = data.city.name;
    const days = [];
    const dayIndices = getDayIndices(data);

    for (let i = 0; i < 5; i++) {
      days.push({
        date: data.list[dayIndices[i]].dt_txt,
        weather_desc: data.list[dayIndices[i]].weather[0].description,
        icon: data.list[dayIndices[i]].weather[0].icon,
        temp: data.list[dayIndices[i]].main.temp
      });
    }

    setCity(city);
    setDays(days);
  };

  // tries to make an API call with the given city name and triggers state update
  const makeApiCall = async city => {
    const apiKey = "3044316f6126db93462603440b6cd43c";
    // const apiKey = process.env.WEATHER_API_KEY;
    const units = "imperial";
    const lang = "en";
    const api_data = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${units}&lang=${lang}`
    ).then(resp => resp.data);

    if (api_data.cod === '200') {
      await updateState(api_data);
      return true;
    } else return false;
  };

  // returns array with Indices of the next five days in the list
  // from the API data (every day at 12:00 pm)
  const getDayIndices = data => {
    let dayIndices = [];
    dayIndices.push(0);

    let index = 0;
    let tmp = data.list[index].dt_txt.slice(8, 10);

    for (let i = 0; i < 4; i++) {
      while (
        tmp === data.list[index].dt_txt.slice(8, 10) ||
        data.list[index].dt_txt.slice(11, 13) !== '15'
      ) {
        index++;
      }
      dayIndices.push(index);
      tmp = data.list[index].dt_txt.slice(8, 10);
    }
    return dayIndices;
  };

  const WeatherBoxes = () => {
    const weatherBoxes = days.slice(1).map(day => (
      <li>
        <WeatherBox {...day} />
      </li>
    ));

    return <ul className='weather-box-list'>{weatherBoxes}</ul>;
  };

  return (
    <>
      <div className="weather-card">
        <div className='App'>
          <header className='App-header'>
            <MainWeatherWindow data={days[0]} city={city}>
              <CityInput city={city} makeApiCall={makeApiCall} />
              <WeatherBoxes />
            </MainWeatherWindow>
          </header>
        </div>
      </div>
    </>
  );
}