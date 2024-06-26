"use client";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { storeInfo } from "@/lib/store/features/weather/weatherSlice";
import type { RootState } from "@/lib/store/store";
import moment from "moment";
import { getCityWeatherDetails } from "@/utils/checkWeather";

export default function Home() {
  const cityName = useSelector((state: RootState) => state.weather.city);
  const countryCode = useSelector(
    (state: RootState) => state.weather.countryCode
  ).toLowerCase();
  const dispatch = useDispatch();

  const date = new Date();
  const formattedDate = moment(date).format("LLLL");
  const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  useEffect(() => {
    getCityWeatherDetails(cityName, API_KEY, dispatch);
  }, []);

  // const getCityWeatherDetails = async () => {
  //   const URL = "https://api.openweathermap.org/data/2.5/weather";
  //   const FULL_URL = `${URL}?q=${cityName}&appid=${API_KEY}&units=imperial`;

  //   try {
  //     const response = await fetch(FULL_URL);
  //     const data = await response.json();
  //     const dataInfo = {
  //       city: data.name,
  //       countryCode: data.sys.country,
  //       temperature: data.main.temp,
  //       humidity: data.main.humidity,
  //       windSpeed: data.wind.speed,
  //     };
  //     dispatch(storeInfo(dataInfo));
  //     console.log(dataInfo);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <main className="">
      <div className="relative isolate pt-10 dark:bg-gray-950">
        <div
          className="absolute inset-x-0 bottom-[-150px] -z-10 transform-gpu overflow-hidden blur-[64px]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#2563eb] ☐to-[#f59e0b] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        <div className="py-16 lg:pb-30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-center">
            <div className="mx-4 max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                {cityName}
              </h1>
            </div>
            <div>
              <img
                src={`https://flagcdn.com/48x36/${countryCode}.png`}
                alt="country flag"
                className="w-5 h-5 md:w-10 md:h-8"
              />
            </div>
          </div>
          <div className="text-center py-4 text-sm sm:text-md">
            <h3>Weather Forcast for {formattedDate}</h3>
          </div>
        </div>
      </div>
    </main>
  );
}
