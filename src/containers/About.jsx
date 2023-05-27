import React from "react";
import { Intro } from "../containers";
import { spoon } from "../assets";
const About = () => {
  return (
    <section className="section_colomn font-cormorant min-h-screen capitalize gap-8 bg-dimBlack sm:flex-row">
      <div className="flex flex-col justify-center items-center text-center gap-4 text-white">
        <div className="flex flex-col justify-center items-center">
          <h3>about us</h3>
          <img src={spoon} alt="spoon" />
        </div>
        <h1 className="text-[30px] text-golden font-semibold">
          Happy Hours with Us
        </h1>
        <p className="text-[10px] text-grayLight font-poppins">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
      </div>
      <Intro />
    </section>
  );
};

export default About;
