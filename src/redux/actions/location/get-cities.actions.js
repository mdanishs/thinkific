export const GET_CITIES_INIT_ACTION = '[Get Cities] Init';
export const getCitiesInit = (payload) => ({
  type: GET_CITIES_INIT_ACTION,
  payload,
});

export const GET_CITIES_SUCCESS_ACTION = '[Get Cities] Success';
export const getCitiesSuccess = (payload) => ({
  type: GET_CITIES_SUCCESS_ACTION,
  payload,
});

export const GET_CITIES_FAIL_ACTION = '[Get Cities] Fail';
export const getCitiesFail = (payload) => ({
  type: GET_CITIES_FAIL_ACTION,
  payload
});
