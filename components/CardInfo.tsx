import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import DeviceThermostatOutlinedIcon from '@mui/icons-material/DeviceThermostatOutlined';

const CardInfo = () => {
  return (
      <Card className="w-[400px] h-[250px] lg:w-[350px] flex flex-col items-center justify-center">
        <CardHeader className="bg-slate-100 p-5 rounded-lg mb-5">
          <DeviceThermostatOutlinedIcon className="text-4xl text-blue-500"/>
        </CardHeader>
        <CardContent className="p-2">
          <p className="text-slate-500">Temperature</p>
        </CardContent>
        <CardFooter>
          <p className="text-2xl font-semibold">22.3 °C</p>
        </CardFooter>
      </Card>
  );
};

export default CardInfo;
