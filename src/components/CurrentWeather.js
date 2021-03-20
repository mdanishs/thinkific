import {
  Col,
  Row
} from 'react-bootstrap';
import ExtraData from './ExtraData';

const CurrentWeather = () => {
  return (
    <Row>
      <Col>
        <h6>Sunday 12, March 2020</h6>
        <p>London - Rain</p>
        <h2>31&deg;</h2>
      </Col>
      <Col xs={12} md={6} className="d-flex justify-content-between">
        <ExtraData title="Feels like" description="29" />
        <ExtraData title="Humidity" description="29" />
        <ExtraData title="Wind" description="29" />
      </Col>
    </Row>
  )
}

export default CurrentWeather;