import {
  Col,
  Row
} from 'react-bootstrap';
import { IMAGES } from '../constants';
import ExtraData from './ExtraData';

const CurrentWeather = () => {
  return (
    <Row className="current-weather-container p-3 text-light">
      <Col>
        <h6>Sunday 12, March 2020 &bull; London</h6>
        <p className="capitalize">Rain</p>
        <h2 className="temprature">31&deg;</h2>
      </Col>
      <Col xs={12} md={6} className="d-flex justify-content-between align-items-center">
        <ExtraData title="Feels like" description="29" icon={IMAGES.TEMPRATURE} />
        <ExtraData title="Humidity" description="29" icon={IMAGES.HUMIDITY} />
        <ExtraData title="Wind" description="29" icon={IMAGES.WIND} />
      </Col>
    </Row>
  )
}

export default CurrentWeather;