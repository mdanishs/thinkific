import { useEffect } from 'react';
import {
  Alert,
  Col,
  Row
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Skeleton from 'react-skeleton-loader';
import ExtraData from './ExtraData';
import { IMAGES, COMMON_DATE_FORMAT } from '../constants';
import { getCurrentWeather } from '../sources';
import { getFormattedDate, getWeatherIconUrl } from '../utils';

const CurrentWeather = () => {

  const dispatch = useDispatch();
  const weatherData = useSelector(state => state.weatherReducer.getCurrentWeather);
  const selectedCityData = useSelector(state => state.locationReducer.setCity);

  useEffect(() => {
    if (selectedCityData.data && selectedCityData.data.city)
      dispatch(getCurrentWeather({ city: selectedCityData.data.city }));
  }, [selectedCityData]);

  if (weatherData.isLoading) return (
    <Skeleton width="100%" height="150px" widthRandomness={0} />
  )

  if (weatherData.error) return (
    <Row className="pt-1" xs={12}>
      <Alert className="w-100" title="jani" variant="danger">{weatherData.error}</Alert>
    </Row>
  )

  if (weatherData.isSuccess) {
    return (
      <Row className="current-weather-container p-3 text-light">
        <Col>
          {weatherData.data.weather && weatherData.data.weather[0] && (
            <div className="capitalize">
              <img alt="weather icon" className="weather-icon" src={getWeatherIconUrl(weatherData.data.weather[0].icon)} />
              {weatherData.data.weather[0].description}
            </div>
          )}
          <h2 className="temprature pt-3">{weatherData.data.main.temp}&deg;C</h2>
          <h6>{getFormattedDate(weatherData.data.dt, COMMON_DATE_FORMAT)} &bull; {weatherData.data.name}</h6>
        </Col>
        <Col xs={12} md={6} className="d-flex justify-content-between align-items-center">
          <ExtraData
            title="Feels like"
            description={<span>{weatherData.data.main.feels_like}&deg;</span>}
            icon={IMAGES.TEMPRATURE}
          />
          <ExtraData
            title="Humidity"
            description={<span>{weatherData.data.main.humidity}%</span>}
            icon={IMAGES.HUMIDITY}
          />
          <ExtraData
            title="Wind"
            description={<span>{weatherData.data.wind.speed} m/s</span>}
            icon={IMAGES.WIND}
          />
        </Col>
      </Row>
    )
  }
  return null;
}

export default CurrentWeather;