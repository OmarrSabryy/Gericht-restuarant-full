import React from "react";
import { spoon } from "../assets";
import { poisons } from "../constants";
import { ImgBanner } from "../ui";
const poisonsList = poisons.map((poison) => (
  <ImgBanner
    key={poison.id}
    img={poison.img}
    title={poison.id}
    width={200}
    height={300}
  />
));
const Poison = () => {
  return (
    <section className="section_colomn min-h-screen font-cormorant text-white">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col justify-center items-center">
          <h3>Wide Range to choose from</h3>
          <img src={spoon} alt="spoon" />
        </div>
        <h1 className="text-[30px] text-center text-golden font-semibold">
          What’s Your Poison?
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 sm:flex-row">
        {poisonsList}
      </div>
    </section>
  );
};

export default Poison;
