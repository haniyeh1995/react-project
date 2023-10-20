import Search from "./component/Search/Search";
import CurrentWeather from "./component/Current-weather/Current-weather"
import './App.css'
import { WEATHER_API_URL, WEATHER_API_KEY } from "./Api"
import { useState } from "react";
import Forecast from "./component/Forecast/Forecast"


function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);


  const handelOnSearchChange = (searchData) => {
    const [latitude, longitude] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`);
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`);

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });

      })
      .catch((err) => console.log(err));

  }

  console.log(currentWeather);
  console.log(forecast);

  return (
    <div className="container">
      <h1 className="title">Weather App</h1>
      <Search onSearchChanege={handelOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast}/>}

    </div>
  )

}
export default App