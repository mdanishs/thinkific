export const GET_CURRENT_WEATHER_INIT_ACTION = '[Get Current Weather] Init';
export const getCurrentWeatherInit = (payload) => ({
  type: GET_CURRENT_WEATHER_INIT_ACTION,
  payload,
});

export const GET_CURRENT_WEATHER_SUCCESS_ACTION = '[Get Current Weather] Success';
export const getCurrentWeatherSuccess = (payload) => ({
  type: GET_CURRENT_WEATHER_SUCCESS_ACTION,
  payload,
});

export const GET_CURRENT_WEATHER_FAIL_ACTION = '[Get Current Weather] Fail';
export const getCurrentWeatherFail = (payload) => ({
  type: GET_CURRENT_WEATHER_FAIL_ACTION,
  payload
});
