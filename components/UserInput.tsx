"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useDispatch } from "react-redux";
import { getCityWeatherDetails } from "@/utils/checkWeather";
import { useToast } from "@/components/ui/use-toast";
import { fetchPlace } from "@/utils/fetchPlace";

function UserInput() {
  const [city, setCity] = useState();
  const [autocompleteCities, setAutocompleteCities] = useState<any[]>([]);
  const [cityData, setCityData] = useState<any[]>([]);
  const [autocompleteErr, setAutocompleteErr] = useState("");
  const dispatch = useDispatch();
  const { toast } = useToast();
  const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

  const handleCityChange = async (e: any) => {
    setCity(e.target.value);
    if (!city) return;

    const res = await fetchPlace(city);
    setCityData(res.features);
    !autocompleteCities.includes(e.target.value) &&
      res.features &&
      setAutocompleteCities(res.features.map((place: any) => place.place_name));
    res.error ? setAutocompleteErr(res.error) : setAutocompleteErr("");
  };

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
      const cityInfo = cityData.find((place: any) => place.place_name === city);
      const countryInfo = cityInfo.context.find((info: any) => info.short_code);
      const countryCode = countryInfo.short_code.substring(0, 2);
      getCityWeatherDetails(city, countryCode, API_KEY, dispatch);
    }
  };

  return (
    <div className="w-full max-w-xs flex">
      {autocompleteErr && <span className="inputError">{autocompleteErr}</span>}
      <Input
        list="places"
        id="city"
        type="search"
        placeholder="Search for a city..."
        className="pl-5 border rounded-full mx-1 cursor-pointer"
        value={city}
        onChange={handleCityChange}
        required
        pattern={autocompleteCities.join("|")}
        autoComplete="off"
      />
      <datalist id="places">
        {autocompleteCities.map((city, i) => (
          <option key={i}>{city}</option>
        ))}
      </datalist>
      <Button type="submit" onClick={checkWeather}>
        Search
      </Button>
    </div>
  );
}

export default UserInput;
