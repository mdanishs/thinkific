import { Row, Col } from 'react-bootstrap';
import { getFormattedDate, getWeatherIconUrl } from '../utils';
import ExtraData from './ExtraData';

const DayWeather = ({ weatherData, day }) => {
  const renderWeatherDescription = (data) => (
    <div className="weather-description">
      <div className="text-muted"><small>{data.weather[0].main}</small></div>
      <div className="temprature">{data.main.temp}&deg;</div>
    </div>
  )
  return (
    <Row className="day-weather-container p-3">
      <Col>
        <h5 className="text-dark">{day}</h5>
        <div className="time-list d-flex justify-content-between pt-2 pt-md-0">
          {
            weatherData.map(data => (
              <ExtraData
                title={getFormattedDate(data.dt, 'HH:MM')}
                icon={getWeatherIconUrl(data.weather[0].icon)}
                description={renderWeatherDescription(data)}
              />
            ))
          }
        </div>
      </Col>
    </Row>
  )
}

export default DayWeather;