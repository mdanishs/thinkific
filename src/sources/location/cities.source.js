import axios from 'axios';
import { SEARCH_BY, MESSAGES } from '../../constants';
import {
  getCitiesInit,
  getCitiesFail,
  getCitiesSuccess,
} from '../../redux/actions'
import {
  CITIES_API_HOST,
  CITIES_API_KEY,
  GET_CITIES
} from '../api.constants';

export function getCities(searchTerm) {
  return (dispatch) => {
    dispatch(getCitiesInit());
    axios.get(GET_CITIES, {
      params: {
        searchby: SEARCH_BY,
        query: searchTerm,
      },
      headers: {
        'x-rapidapi-key': CITIES_API_KEY,
        'x-rapidapi-host': CITIES_API_HOST,
        useSearchString: true
      }
    }).then(res => {
      dispatch(getCitiesSuccess(res.data));
    }).catch(err => {
      let error = MESSAGES.SOMETHING_WENT_WRONG;
      if (err.response && err.response.data) {
        error = err.response.data.message
      }
      dispatch(getCitiesFail(error))
    })
  }
}
