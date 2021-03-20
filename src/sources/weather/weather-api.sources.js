import axios from 'axios';
import {
  API_KEY,
  FIVE_DAY_WEATHER_URL
} from '../api.constants';
import {
  getFiveDayWeatherFail,
  getFiveDayWeatherInit,
  getFiveDayWeatherSuccess
} from '../../redux/actions';
import { MESSAGES } from '../../constants';

export function getFiveDayForecast(city) {
  return (dispatch) => {
    getFiveDayWeatherInit();
    axios.get(FIVE_DAY_WEATHER_URL, {
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