import React from "react";
import { mapImg } from "../assets";
const Map = () => {
  return (
    <section className="section bg-dimBlack">
      <div className="flex justify-center items-center w-[220px] h-[120px] border-[1px] border-golden sm:w-[500px] sm:h-[200px]">
        <img className="w-full h-full object-cover" src={mapImg} alt="mapImg" />
      </div>
    </section>
  );
};

export default Map;
