import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  Container
} from 'react-bootstrap';
import { getFiveDayForecast } from './sources/weather/weather-api.sources';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFiveDayForecast('london'))
  }, []);
  return (
    <Container>
      <h1>Thinkific weather app</h1>
    </Container>
  );
}

export default App;
