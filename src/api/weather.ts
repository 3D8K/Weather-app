import axios from "axios";

export const getWeather = () => {
  axios.get("https://api.openweathermap.org/data/2.5/weather");
};
