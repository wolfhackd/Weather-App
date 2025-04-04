import { faCloud, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import backgroundImage from "../assets/bg-weather.png";

const Home = () => {
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
            <div className="w-136 max-h-40 flex">
              <h1 className="text-9xl">16°</h1>
              <div className="flex flex-col justify-center">
                <h2 className="text-6xl">London</h2>
                <div className="text-base">06:09 - Monday, 9 Sep ‘23</div>
              </div>
              <FontAwesomeIcon icon={faCloud} className="text-9xl" />
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
