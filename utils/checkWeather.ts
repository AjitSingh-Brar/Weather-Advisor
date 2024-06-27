
import { storeError, storeInfo } from "@/lib/store/features/weather/weatherSlice";

export const getCityWeatherDetails = async (cityName: string, countryCode: string, API_KEY: string | undefined, dispatch: any) => {
    const URL = "https://api.openweathermap.org/data/2.5/weather";
    const FULL_URL = `${URL}?q=${cityName},${countryCode}&appid=${API_KEY}`;

    try {
      const response = await fetch(FULL_URL);
      const data = await response.json();
      const dataInfo = {
        city: data.name,
        countryCode: data.sys.country,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
      };
      dispatch(storeInfo(dataInfo));
    } catch (error) {
      dispatch(storeError(error));
    }
  };