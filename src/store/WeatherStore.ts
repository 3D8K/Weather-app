import { makeAutoObservable } from "mobx";
import { Tlocation } from "../types/weatherStore";
import { getWeather } from "../api/weather";

class WeatherStore {
  loading = false;

  location = <Tlocation | undefined>{};

  constructor() {
    makeAutoObservable(this);
  }

  setLocation({ lot, lat }: any) {
    this.loading = true;
    getWeather(lot, lat).then((response) => {
      console.log(response);
    });
  }
}

export const weatherStore = new WeatherStore();
