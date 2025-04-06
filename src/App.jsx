import { useEffect, useState } from "react";
import Home from "./pages/Home";
import axios from "axios";

function App() {
  const [location, setLocation] = useState("");
  const [info, setInfo] = useState("");
  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      // console.log(position.coords.latitude);
      // console.log(position.coords.longitude);
      setLocation({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    });
  }, []);

  useEffect(() => {
    if (location) {
      const fetchWeatherData = async () => {
        try {
          const responde = await axios.get(
            `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location.lat},${location.lon}&aqi=no`
          );
          setInfo(responde.data);
        } catch (err) {
          console.error(err);
        }
      };
      fetchWeatherData();
    }
  }, [location]);
  // Apenas no desenvolvimento
  // console.log(info);

  return (
    <>
      <Home data={info} />
    </>
  );
}

export default App;
