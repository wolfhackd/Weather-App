import { useEffect, useState } from "react";
import Home from "./pages/Home";
import axios from "axios";

function App() {
  const [location, setLocation] = useState("");
  const [info, setInfo] = useState("");
  // crie um .env no arquivo raiz com VITE_API_KEY=key
  //para o código funcionar
  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    });
  }, []);

  useEffect(() => {
    if (location) {
      const fetchForecastData = async () => {
        try {
          const response = await axios.get(
            `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location.lat},${location.lon}&days=7`
          );

          // console.log(response.data);
          setInfo(response.data);
        } catch (err) {
          console.error("Error fetching forecast data.", err);
          setInfo(null);
        }
      };
      fetchForecastData();
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
