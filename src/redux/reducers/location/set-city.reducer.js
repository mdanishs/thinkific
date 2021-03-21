import {
  SET_CITY,
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
    case SET_CITY:
      return {
        ...state,
        isFetched: true,
        isLoading: false,
        isSuccess: true,
        isFailed: false,
        data: action.payload
      }
    default:
      return state
  }
}

export default getCurrentWeatherReducer;