import { useEffect, useState } from 'react';
import {
  Col,
  Container,
  Row
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import SearchControl from './components/SearchControl';
import CurrentWeather from './components/CurrentWeather';
import DayWeatherList from './components/DayWeatherList';
import { getCurrentWeather, getFiveDayForecast } from './sources';

function App() {
  const dispatch = useDispatch();
  const [geoLocationAvailable, setGeolocationAvailable] = useState(false);
  const selectedCity = useSelector(state => state.locationReducer.setCity);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setGeolocationAvailable(true);
        dispatch(getCurrentWeather({
          lat: position.coords.latitude,
          lon: position.coords.longitude
        }))
        dispatch(getFiveDayForecast({
          lat: position.coords.latitude,
          lon: position.coords.longitude
        }))
      })
    }
  },[]);

  return (
    <Container className="pt-4">
      <Row>
        <Col>
          <h5 className="text-info">Weather Forecast</h5>
        </Col>
        <Col md={4} xs={12}>
          <SearchControl />
        </Col>
      </Row>
      {!geoLocationAvailable && !selectedCity.data &&
        <Row className="pt-3">
          <Col xs={12}>
            <Row className="current-weather-container p-3 text-light">
              <Col>
                <h4>Please search and select a city</h4>
              </Col>
            </Row>
          </Col>
        </Row>
      }
      <Row className="pt-3">
        <Col xs={12}>
          <CurrentWeather />
        </Col>
      </Row>
      <Row className="pt-3">
        <Col className="day-weather-list">
          <DayWeatherList />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
