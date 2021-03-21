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
import { MESSAGES, UNITS } from '../../constants';
import { getFiveDayWeatherNormalizer } from '../../normalizers';

export function getFiveDayForecast({ city, lat, lon }) {
  return (dispatch) => {
    dispatch(getFiveDayWeatherInit());
    axios.get(GET_FIVE_DAY_WEATHER_URL, {
      params: {
        q: city,
        lat,
        lon,
        appid: API_KEY,
        units: UNITS
      }
    }).then(res => {
      let data = getFiveDayWeatherNormalizer(res.data.list);
      dispatch(getFiveDayWeatherSuccess(data));
    }).catch(err => {
      let error = MESSAGES.SOMETHING_WENT_WRONG;
      if (err.response && err.response.data) {
        error = err.response.data.message
      }
      dispatch(getFiveDayWeatherFail(error))
    })
  }
}

export function getCurrentWeather({ city, lat, lon }) {
  return (dispatch) => {
    dispatch(getCurrentWeatherInit());
    axios.get(GET_CURRENT_WEATHER_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: UNITS,
        lat,
        lon
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