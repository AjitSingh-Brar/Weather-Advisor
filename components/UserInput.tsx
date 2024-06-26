"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useDispatch } from "react-redux";
import { getCityWeatherDetails } from "@/utils/checkWeather";
import { useToast } from "@/components/ui/use-toast";

function UserInput() {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  const { toast } = useToast();
  const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

  const checkWeather = (e: any) => {
    e.preventDefault();
    if (city === undefined || city === "") {
      toast({
        title: "Error",
        description: (
          <div>
            <h3 className="text-red-600 font-medium">
              Please enter a city to search.
            </h3>
          </div>
        ),
      });
    } else {
      getCityWeatherDetails(city, API_KEY, dispatch);
    }
  };

  return (
    <div className="w-full max-w-xs flex">
      <Input
        type="search"
        placeholder="Search for a city..."
        className="pl-5 border rounded-full mx-1 cursor-pointer"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <Button type="submit" onClick={checkWeather}>
        Search
      </Button>
    </div>
  );
}

export default UserInput;