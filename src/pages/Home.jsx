import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Home = () => {
  return (
    <>
      <section className="h-screen w-screen bg-gray-500">
        <div className="flex justify-between h-full w-full px-40 pt-6">
          <div className="flex flex-col justify-between pb-20">
            <h1 className="bg-white w-23 h-12">Ola</h1>
            {/* Parte da temperatura e tudo mais */}
            <div className="bg-amber-300 w-128 h-40 flex">
              <h1 className="text-9xl">16°</h1>
              <div>
                <h2>London</h2>
                <div>06:09 - Monday, 9 Sep ‘23</div>
              </div>
              <FontAwesomeIcon icon={faCloud} className="text-9xl" />
            </div>
          </div>
          {/* Parte direita */}
          <div>
            <h1>Olaaa</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
