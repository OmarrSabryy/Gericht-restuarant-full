import React from "react";
import { Link } from "react-router-dom";
import { barHeaderImg, barHeaderImgSs } from "../assets";
const HeaderBar = () => {
  return (
    <section className="section_colomn capitalize font-cormorant my-8 ">
      <div className="flex items-center justify-evenly w-full text-[12px] font-poppins cursor-pointer text-white">
        <Link to="/bar">#Bar</Link>
        <Link to="/">#Gericht</Link>
      </div>
      <div className="flex justify-center items-center w-full relative ">
        <div className="flex justify-center items-center  w-[250px] h-[330px] sm:w-[400px] sm:h-[500px]">
          <img
            className="w-full h-full object-cover"
            src={barHeaderImgSs}
            alt="barHeaderImg"
          />
        </div>
        <h1 className="absolute text-crimson text-[50px] font-semibold w-max sm:text-[90px]">
          On the Rocks
        </h1>
      </div>
    </section>
  );
};

export default HeaderBar;
