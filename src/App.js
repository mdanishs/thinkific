import {
  Col,
  Container,
  Row
} from 'react-bootstrap';
import SearchControl from './components/SearchControl';
import CurrentWeather from './components/CurrentWeather';
import DayWeather from './components/DayWeather';

function App() {
  return (
    <Container className="p-4">
      <Row>
        <Col>
          <h5 className="text-info">Weather Forecast</h5>
        </Col>
        <Col md={4} xs={12}>
          <SearchControl />
        </Col>
      </Row>
      <Row className="pt-3">
        <Col xs={12}>
          <CurrentWeather />
        </Col>
      </Row>
      <Row className="pt-3">
        <Col>
          <DayWeather/>
        </Col>
      </Row>
    </Container >
  );
}

export default App;
