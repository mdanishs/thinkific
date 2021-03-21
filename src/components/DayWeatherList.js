import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Skeleton from 'react-skeleton-loader';
import { getFiveDayForecast } from "../sources"
import DayWeather from "./DayWeather"

const DayWeatherList = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector(state => state.weatherReducer.getFiveDayWeather);
  const selectedCityData = useSelector(state => state.locationReducer.setCity);

  useEffect(() => {
    if (selectedCityData.data && selectedCityData.data.city)
      dispatch(getFiveDayForecast(selectedCityData.data.city));
  }, [selectedCityData]);

  if (weatherData.isLoading) {
    return (
      <>
        <Skeleton widthRandomness={0} width="100%" height="80px" />
        <Skeleton widthRandomness={0} width="100%" height="80px" />
        <Skeleton widthRandomness={0} width="100%" height="80px" />
      </>
    )
  }

  if (weatherData.isSuccess) {
    return Object.keys(weatherData.data).map(day => {
      return <DayWeather key={day} day={day} weatherData={weatherData.data[day]} />
    })

  }
  return null
}

export default DayWeatherList;