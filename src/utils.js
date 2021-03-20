import dayjs from 'dayjs';
export function getWeatherIconUrl(icon) {
  return `http://openweathermap.org/img/wn/${icon}@2x.png`;
}

export function getFormattedDate(date, format) {
  return dayjs(date * 1000).format(format);
}