import React from "react";
import { features } from "../constants";
import { Feature } from "../components";
import { historyImg01, historyImg02, spoon } from "../assets";
const featuresList = features.map((feature, index) => (
  <div className="flex justify-center items-center gap-4" key={feature.id}>
    <Feature title={feature.title} value={feature.value} />
    {index !== features.length - 1 && (
      <div className="bg-white w-[1px] h-[50px] bg-opacity-50" />
    )}
  </div>
));
const History = () => {
  return (
    <section className="section_colomn min-h-screen font-cormorant text-grayLight capitalize bg-dimBlack">
      <div className="flex flex-col justify-center items-center text-center text-white gap-2">
        <div className="flex flex-col justify-center items-center">
          <h3>our history</h3>
          <img src={spoon} alt="spoon" />
        </div>
        <h1 className="text-[30px] text-golden font-semibold">
          serving customers for over a decade
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center text-center gap-4 sm:flex-row sm:text-left">
        <div className="flex flex-col gap-2 justify-center items-center sm:items-start">
          <p className="text-[10px] normal-case font-poppins">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <div className="flex justify-center items-center w-[200px] h-[300px] sm:w-[300px] sm:h-[400px]">
            <img
              className="w-full h-full object-cover"
              src={historyImg01}
              alt="historyImg01"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 sm:items-start">
          <div className="flex justify-center items-center w-[200px] h-[150px] sm:w-[300px] sm:h-[200px]">
            <img
              className="w-full h-full object-cover"
              src={historyImg02}
              alt="historyImg02"
            />
          </div>
          <h2 className="text-[20px] text-golden">Over the years</h2>
          <div className="flex justify-center items-center gap-4">
            {featuresList}
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
