import { COMMON_DATE_FORMAT } from "../../constants";
import { getFormattedDate } from "../../utils";

export function getFiveDayWeatherNormalizer(responseData) {
  let dateWiseData = {};
  if (responseData) {
    responseData.forEach(item => {
      const date = getFormattedDate(item.dt, COMMON_DATE_FORMAT);
      if (!dateWiseData[date]) {
        dateWiseData[date] = []
      }
      dateWiseData[date].push(item);
    })
  }
  return dateWiseData;
}