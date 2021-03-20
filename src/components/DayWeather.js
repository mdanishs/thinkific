import { Row, Col } from 'react-bootstrap';
import ExtraData from './ExtraData';

const DayWeather = ({ weatherData }) => {
  return (
    <Row className="day-weather-container p-3">
      <Col md={4} className="text-muted">
        <strong>Saturday 21, March 2020</strong>
        <div>Light Rain</div>
      </Col>
      <Col xs={12} md={8} className="time-list d-flex justify-content-between pt-2 pt-md-0 text-info">
        <ExtraData title="0300" description="39" />
        <ExtraData title="0300" description="39" />
        <ExtraData title="0300" description="39" />
        <ExtraData title="0300" description="39" />
        <ExtraData title="0300" description="39" />
        <ExtraData title="0300" description="39" />
        <ExtraData title="0300" description="39" />
        <ExtraData title="0300" description="39" />
      </Col>
    </Row>
  )
}

export default DayWeather;