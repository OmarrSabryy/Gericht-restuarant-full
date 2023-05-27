import React from "react";
import { barInActionImg, drinkImg } from "../assets";
import { Button, SubHeader } from "../components";
const AboutBar = () => {
  return (
    <section className="section_colomn min-h-screen flex-col-reverse sm:flex-row sm:gap-8 ">
      <Button className="sm:hidden" title="know more" to="/aboutUs" />
      <div className="flex justify-center items-center w-[200px] h-[270px] sm:w-[350px] sm:h-[420px]">
        <img
          className="w-full h-full object-cover"
          src={barInActionImg}
          alt="barInActionImg"
        />
      </div>
      <div className="flex flex-col justify-center items-start gap-4">
        <div className="flex justify-center items-center w-[220px] h-[150px] sm:w-[350px] sm:h-[200px]">
          <img
            src={drinkImg}
            alt="drinkImg"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-2">
          <SubHeader title="about us" />
          <h1 className="text-[30px] font-cormorant text-golden capitalize">
            Food, Drinks, entertainment in one
          </h1>
        </div>
        <p className="text-[10px] text-grayLight font-poppins">
          Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
          Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
          odio nec aliquet.
        </p>
        <Button className="hidden sm:flex" title="know more" to="/aboutUs" />
      </div>
    </section>
  );
};

export default AboutBar;
