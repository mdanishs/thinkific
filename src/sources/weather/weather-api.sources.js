import axios from 'axios';
import {
  API_KEY,
  GET_FIVE_DAY_WEATHER_URL,
  GET_CURRENT_WEATHER_URL
} from '../api.constants';
import {
  getFiveDayWeatherFail,
  getFiveDayWeatherInit,
  getFiveDayWeatherSuccess,
  getCurrentWeatherInit,
  getCurrentWeatherSuccess,
  getCurrentWeatherFail,
} from '../../redux/actions';
import { MESSAGES } from '../../constants';

export function getFiveDayForecast(city) {
  return (dispatch) => {
    getFiveDayWeatherInit();
    axios.get(GET_FIVE_DAY_WEATHER_URL, {
      params: {
        q: city,
        appid: API_KEY
      }
    }).then(res => {
      dispatch(getFiveDayWeatherSuccess(res.data.list));
    }).catch(err => {
      let error = MESSAGES.SOMETHING_WENT_WRONG;
      if (err.response && err.response.data) {
        error = err.response.data.message
      }
      dispatch(getFiveDayWeatherFail(error))
    })
  }
}

export function getCurrentWeather(city) {
  return (dispatch) => {
    getCurrentWeatherInit();
    axios.get(GET_CURRENT_WEATHER_URL, {
      params: {
        q: city,
        appid: API_KEY
      }
    }).then(res => {
      dispatch(getCurrentWeatherSuccess(res.data));
    }).catch(err => {
      let error = MESSAGES.SOMETHING_WENT_WRONG;
      if (err.response && err.response.data) {
        error = err.response.data.message
      }
      dispatch(getCurrentWeatherFail(error))
    })
  }
}