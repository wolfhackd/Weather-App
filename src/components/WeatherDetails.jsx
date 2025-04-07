import React, { useEffect, useState } from "react";
import {
  faCloud,
  faDroplet,
  faMagnifyingGlass,
  faTemperatureQuarter,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../index.css";

const WeatherDetails = (props) => {
  const [forecast, setForecast] = useState(null);
  const [day, setDay] = useState(null);

  useEffect(() => {
    if (props?.data?.forecast) {
      setForecast(props.data.forecast);
      setDay(props.data.current);
      // console.log(forecast);
    }
  }, [props.data]);

  const dataFormat = (data) => data.split("-").reverse().join("-");
  // Linha de informações
  const InfoRow = ({ label, value, icon, iconClass }) => (
    <div className="flex justify-between items-center">
      <p>{label}</p>
      <div className="flex items-center gap-4">
        <p>{value}</p>
        <FontAwesomeIcon icon={icon} className={iconClass} />
      </div>
    </div>
  );

  return (
    <>
      <div className="flex flex-col bg-white/30 backdrop-blur-md h-screen overflow-hidden pl-6 pr-40 pt-6 text-white">
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
        <div className="flex flex-col justify-between border-b pb-12">
          <p className="my-6">Weather Details...</p>
          <div className="flex flex-col justify-between gap-8 text-gray-200">
            <p className="py-4 font-bold uppercase text-white">
              {forecast?.forecastday[0]?.day?.condition?.text}
            </p>

            <InfoRow
              label="Temp max"
              value={`${forecast?.forecastday[0]?.day?.maxtemp_c}°`}
              icon={faTemperatureQuarter}
              iconClass="text-red-300"
            />
            <InfoRow
              label="Temp min"
              value={`${forecast?.forecastday[0]?.day?.mintemp_c}°`}
              icon={faTemperatureQuarter}
              iconClass="text-blue-300"
            />

            <InfoRow
              label="Humidity"
              value={`${day?.humidity}%`}
              icon={faDroplet}
            />

            <InfoRow label="Cloudy" value={`${day?.cloud}%`} icon={faCloud} />

            <InfoRow
              label="Wind"
              value={`${day?.wind_kph}km/h`}
              icon={faWind}
            />
          </div>
        </div>
        {/* tenho que tirar o scroll */}
        <div className="overflow-y-auto h-full w-full hide-scrollbar">
          <h2 className="my-8"> Today’s Weather Forecast...</h2>

          <div className="flex flex-col w-full">
            {forecast?.forecastday.map((day, index) => {
              return (
                <div key={index} className="flex gap-6 w-full">
                  <img
                    src={day.day.condition.icon}
                    alt={day.day.condition.text}
                  />
                  <div className="flex w-full">
                    <div className="flex flex-col">
                      <span>{dataFormat(day.date)}</span>
                      <span>{day.day.condition.text}</span>
                    </div>
                    <p className="ml-auto">{day.day.avgtemp_c}°</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* <div className="flex justify-between items-center gap-4">
            {forecast?.forecastday.map((day, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-4 bg-white/10 backdrop-blur-md rounded-lg p-6"
                >
                  <p className="text-gray-200">{day.date}</p>
                  <img src={day.day.condition.icon} alt="" />
                  <p className="text-gray-200">{day.day.avgtemp_c}°</p>
                </div>
              );
            })}
          </div> */}
        </div>
      </div>
    </>
  );
};

export default WeatherDetails;
