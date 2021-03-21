import { combineReducers } from "redux";
import getCities from './get-cities.reducer';
import setCity from './set-city.reducer';

export default combineReducers({
  getCities,
  setCity
});