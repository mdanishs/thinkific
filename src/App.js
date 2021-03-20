import {
  Col,
  Container,
  Row
} from 'react-bootstrap';
import SearchControl from './components/SearchControl';
import CurrentWeather from './components/CurrentWeather';

function App() {
  return (
    <Container className="p-4">
      <Row>
        <Col>
          <h5>Weather Forecast</h5>
        </Col>
        <Col md={4} xs={12}>
          <SearchControl />
        </Col>
        <Col xs={12} className="pt-3">
          <CurrentWeather />
        </Col>
      </Row>
    </Container >
  );
}

export default App;
