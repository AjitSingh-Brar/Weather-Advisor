"use client";

import { useSelector } from "react-redux";
import type { RootState } from "@/lib/store/store";
import moment from "moment";
import InfoTab from "@/components/InfoTab";
import Banner from "@/components/Banner";

export default function Home() {
  const cityName = useSelector((state: RootState) => state.weather.city);
  const countryCode = useSelector(
    (state: RootState) => state.weather.countryCode
  ).toLowerCase();
  const error = useSelector((state: RootState) => state.weather.error);

  const date = new Date();
  const formattedDate = moment(date).format("LLLL");

  return (
    <main>
      {!cityName ? (
        <Banner />
      ) : (
        <>
          <div className="relative isolate pt-10 dark:bg-gray-950">
            <div
              className="absolute inset-x-0 top-[-80px] -z-10 transform-gpu overflow-hidden blur-[64px]"
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
          <InfoTab />
        </>
      )}
    </main>
  );
}
