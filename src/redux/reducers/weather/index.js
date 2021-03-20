import { combineReducers } from "redux";
import getFiveDayWeather from './get-five-day-weather.reducer';
import getCurrentWeather from './get-current-weather.reducer';

export default combineReducers({
  getFiveDayWeather,
  getCurrentWeather
});