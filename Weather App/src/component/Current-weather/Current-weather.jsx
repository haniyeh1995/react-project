import './Current-weather.css'
import PropTypes from 'prop-types'

function CurrentWeather({data}) {
  return (
    <div className='weather'>
      <div className='top'>
        <div>
          <p className='city'>{data.city}</p>
          <p className='weather-description'>{data.weather[0].description}</p>
        </div>
        <img className='weather-icon' src={`../public/icons/${data.weather[0].icon}.png`} alt="weather" />
      </div>
      <div className='bottom'>
        <p className='temperature'>{Math.round(data.main.temp)}°C</p>
        <div className='details'>
          <div className='parameter-row'>
            <span className='parameter-label'>Details</span>
          </div>
          <div className='parameter-row'>
            <span className='parameter-label'>Feels like</span>
            <span className='parameter-value'>{Math.round(data.main.feels_like)} °C</span>
          </div>
          <div className='parameter-row'>
            <span className='parameter-label'>Wind</span>
            <span className='parameter-value'>{Math.round(data.wind.speed)} m/s</span>
          </div>
          <div className='parameter-row'>
            <span className='parameter-label'>Humidity</span>
            <span className='parameter-value'>{Math.round(data.main.humidity)} %</span>
          </div>
          <div className='parameter-row'>
            <span className='parameter-label'>Pressure</span>
            <span className='parameter-value'>{Math.round(data.main.pressure)} hpa</span>
          </div>
        </div>
      </div>

    </div>

  )
}

CurrentWeather.propTypes = {
  data: PropTypes.string,
}
export default CurrentWeather