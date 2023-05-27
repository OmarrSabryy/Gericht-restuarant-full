import React from "react";
import { SubHeader, Laurel } from "../components";
import { laurels } from "../constants";
import { laurelsImg } from "../assets";
const laurelsList = laurels.map((laurel) => (
  <Laurel
    key={laurel.id}
    title={laurel.title}
    content={laurel.content}
    img={laurel.img}
  />
));
const Laurels = () => {
  return (
    <section className="section_colomn min-h-screen capitalize sm:flex-row">
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="flex flex-col gap-2 sm:self-start">
          <SubHeader title="awards & recognition" />
          <h1 className="text-golden text-[30px] font-cormorant font-semibold">
            our laurels
          </h1>
        </div>
        <div className="flex flex-col justify-center items-start gap-4 sm:grid sm:grid-cols-2">
          {laurelsList}
        </div>
      </div>
      <div className="flex justify-center items-center sm:w-[500px] sm:h-[400px] ">
        <img
          className="w-full h-full object-contain"
          src={laurelsImg}
          alt={`${laurelsImg}`}
        />
      </div>
    </section>
  );
};

export default Laurels;
