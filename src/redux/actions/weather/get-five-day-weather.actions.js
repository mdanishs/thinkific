export const GET_FIVE_DAY_WEATHER_INIT_ACTION = '[Get Five Day Weather] Init';
export const getFiveDayWeatherInit = (payload) => ({
  type: GET_FIVE_DAY_WEATHER_INIT_ACTION,
  payload,
});

export const GET_FIVE_DAY_WEATHER_SUCCESS_ACTION = '[Get Five Day Weather] Success';
export const getFiveDayWeatherSuccess = (payload) => ({
  type: GET_FIVE_DAY_WEATHER_SUCCESS_ACTION,
  payload,
});

export const GET_FIVE_DAY_WEATHER_FAIL_ACTION = '[Get Five Day Weather] Fail';
export const getFiveDayWeatherFail = (payload) => ({
  type: GET_FIVE_DAY_WEATHER_FAIL_ACTION,
  payload
});
