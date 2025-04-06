import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import backgroundImage from "../assets/bg-weather.png";
import DateFormat from "../components/DateFormat";

const Home = (info) => {
  // console.log(info.data.location.name);
  // const [data, setData] = useState(null);

  const [city, setCity] = useState("Null");
  const [temperature, setTemperature] = useState("Null");
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (info?.data?.location) {
      // setData(info);
      setCity(info.data.location.name);

      let temp = info.data.current.temp_c;
      temp = String(temp).split(".")[0].slice(0, 2);
      setTemperature(temp);

      setImage(info.data.current.condition.icon);
    }
  }, [info]);
  return (
    <>
      <section
        className="h-screen w-screen"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="flex justify-between h-full w-full">
          <div className="flex flex-col justify-between pb-20 px-40 pt-6 text-white">
            <h1 className="bg-white w-23 h-12">Ola</h1>
            {/* Parte da temperatura e tudo mais */}
            <div className="max-w-136 max-h-40 flex items-center">
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
          {/* Parte direita */}
          <div className="flex flex-col bg-white/30 backdrop-blur-md h-full pl-6 pr-40 pt-6">
            <div className="flex items-center justify-between text-2xl border-b border-gray-300 w-96 h-12">
              <input
                type="text"
                placeholder="Search Location..."
                className="placeholder:text-white focus:outline-none"
              />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-white cursor-pointer"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
