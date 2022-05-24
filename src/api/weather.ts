import axios from "axios";
import { TCurrentWeather, TCurrentWeatherResponse } from "../types/apiTypes";
import { MY_API_KEY } from "../constants";

export const getWeather = (
  lot: any,
  lat: any
): Promise<TCurrentWeatherResponse> => {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather/lat=${lat}&lon=${lot}&appid=${MY_API_KEY}`
  );
};
