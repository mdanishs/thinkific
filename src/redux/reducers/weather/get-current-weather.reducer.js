import {
  GET_CURRENT_WEATHER_INIT_ACTION,
  GET_CURRENT_WEATHER_FAIL_ACTION,
  GET_CURRENT_WEATHER_SUCCESS_ACTION,
} from "../../actions";

const initialState = {
  isLoading: false,
  isFetched: false,
  isFailed: false,
  isSuccess: false,
  error: null,
  data: null,
}

const getCurrentWeatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_WEATHER_INIT_ACTION:
      return {
        ...state,
        isLoading: true,
        isFetched: false,
        isSuccess: false,
        isFailed: false,
        error: null,
      }
    case GET_CURRENT_WEATHER_SUCCESS_ACTION:
      return {
        ...state,
        isFetched: true,
        isLoading: false,
        isSuccess: true,
        isFailed: false,
        data: action.payload
      }
    case GET_CURRENT_WEATHER_FAIL_ACTION:
      return {
        ...state,
        isLoading: false,
        isFetched: true,
        isFailed: true,
        isSuccess: false,
        error: action.payload
      }
    default:
      return state
  }
}

export default getCurrentWeatherReducer;