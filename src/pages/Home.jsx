import React, { useEffect, useState } from "react";
import backgroundImage from "../assets/bg-weather.png";
import DateFormat from "../components/DateFormat";
import Status from "../components/Status";

const Home = (info) => {
  const [city, setCity] = useState("Null");
  const [temperature, setTemperature] = useState("Null");
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (info?.data?.location) {
      setCity(info.data.location.name);

      let temp = info.data.current.temp_c;
      temp = String(temp).split(".")[0].slice(0, 2);
      setTemperature(temp);

      setImage(info.data.current.condition.icon);
      // console.log(info.data.forecast.forecastday[0].day);
    }
  }, [info]);

  {
    if (info.data === null) {
      return (
        <div className="flex justify-center items-center h-screen w-screen bg-gray-200">
          <h1 className="text-2xl font-bold">Servidores Inoperantes...</h1>
        </div>
      );
    } else {
      return (
        <section
          className="h-screen w-screen"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="flex justify-between h-full w-full">
            <div className="flex flex-col justify-between pb-20 px-40 pt-6 text-white">
              <h1 className="bg-white w-23 h-12 overflow-hidden text-center">
                <img
                  src="/CodeWay__.png"
                  alt="Icone da empresa"
                  className="object-cover w-full h-full"
                />
              </h1>
              {/* Parte dos Mostradores */}
              <div className="max-w-136 max-h-40 flex items-center bg-white/10 backdrop-blur-md shadow-2xs rounded-lg p-6">
                <h1 className="text-9xl">{temperature + "°"}</h1>
                <div className="flex flex-col justify-center w-56 h-24">
                  <h2 className="w-text-sm sm:text-base md:text-lg lg:text-xl font-bold break-words">
                    {city}
                  </h2>
                  <div className="text-base">
                    <DateFormat />
                  </div>
                </div>
                <img src={image} alt="" className="w-20 h-20" />
              </div>
            </div>
            <Status data={info.data} />
          </div>
        </section>
      );
    }
  }
};

export default Home;
