import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import AirIcon from "@mui/icons-material/Air";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import DeviceThermostatOutlinedIcon from "@mui/icons-material/DeviceThermostatOutlined";
import { useSelector } from "react-redux";
import type { RootState } from "@/lib/store/store";

interface WeatherData {
  iconType: string;
  content: string;
}

const CardInfo = ({ iconType, content }: WeatherData) => {
  const temperatureData =
    ((useSelector((state: RootState) => state.weather.temperature) - 32) * 5) /
    9;
  const temperature = Math.round(temperatureData * 10) / 10;
  const humidity = useSelector((state: RootState) => state.weather.humidity);
  const wind = useSelector((state: RootState) => state.weather.windSpeed);

  const checkIcon = (iconType: string) => {
    switch (iconType) {
      case "DeviceThermostatOutlinedIcon":
        return (
          <DeviceThermostatOutlinedIcon className="text-4xl text-blue-500" />
        );

      case "WaterDropIcon":
        return <WaterDropIcon className="text-4xl text-blue-500" />;

      case "AirIcon":
        return <AirIcon className="text-4xl text-blue-500" />;
    }
  };

  const checkValue = (content: string) => {
    switch (content) {
      case "Temperature":
        return <p className="text-2xl font-semibold">{temperature} °C</p>;

      case "Humidity":
        return <p className="text-2xl font-semibold">{humidity}%</p>;

      case "Wind":
        return <p className="text-2xl font-semibold">{wind} km/h</p>;
    }
  };
  return (
    <Card className="w-[400px] h-[250px] lg:w-[350px] flex flex-col items-center justify-center">
      <CardHeader className="bg-slate-100 p-5 rounded-lg mb-5">
        {checkIcon(iconType)}
      </CardHeader>
      <CardContent className="p-2">
        <p className="text-slate-500">{content}</p>
      </CardContent>
      <CardFooter>{checkValue(content)}</CardFooter>
    </Card>
  );
};

export default CardInfo;
