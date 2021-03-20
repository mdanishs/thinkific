import { Row, Col } from 'react-bootstrap';
import ExtraData from './ExtraData';

const DayWeather = ({ weatherData }) => {
  return (
    <Row>
      <Col md={4}>
        <strong>Saturday 21, March 2020</strong>
      </Col>
      <Col xs={12} md={8} className="d-flex justify-content-between pt-2 pt-md-0">
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