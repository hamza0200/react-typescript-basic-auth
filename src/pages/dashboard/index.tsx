import * as React from "react";
import DashboardView from "../../components/Dashboard"
import {useSnackbar} from "notistack";

// take secret key from env configuration
const SECRET_KEY = process.env.REACT_APP_SECRET_KEY;

const weatherData: any= {};
const Dashboard = (): React.ReactElement => {
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = React.useState<boolean>(false);

  // list of locations to fetch weather
  const areas = ["Dallas", "Atalanta", "Denver", "Seattle", "Boston", "Bangalore"];
  
  // if user is not logged-in, redirect to login page
  if(!localStorage.getItem('token')){
    window.location.href = "/";
  }

  // execute weather information API
  const fetchWeatherData = async (q: string) => {
    const weatherEndpoint = `https://api.weatherapi.com/v1/current.json?key=${SECRET_KEY}&q=${q}&aqi=no`;
    try{
      const response = await fetch(weatherEndpoint);
      const json = await response.json();
      weatherData[q] = json;
    }catch (err) {
      enqueueSnackbar("Oops! An error occurred. Unable to fetch weather data.", { variant: "error" });
    }
  }

  // use promises to get weather information of all locations
  const getAllData = async () => {
    setLoading(true);
    await Promise.all(areas.map(q => fetchWeatherData(q)));
  }

  // use useEffect to load weather data
  React.useEffect(()=> {
    getAllData().then(res =>
      setLoading(false));
    }, []);

  return (
    // passing props to dashboard components
    <DashboardView areas={areas} loading={loading} data={weatherData}/>
  );
};

export default Dashboard;
