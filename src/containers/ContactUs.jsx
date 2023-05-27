import React from "react";
import { SubHeader, Button } from "../components";
import { findUsImg } from "../assets";
const ContactUs = () => {
  return (
    <section className="section_colomn min-h-screen font-poppins sm:flex-row sm:gap-8">
      <div className="flex flex-col justify-center items-center gap-4  sm:items-start">
        <div className="flex flex-col justify-center items-center gap-2 font-cormorant sm:items-start">
          <SubHeader title="contact" />
          <h1 className="text-[40px] text-golden font-semibold capitalize">
            find us
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center text-white gap-2 sm:items-start">
          <p className="text-center text-[10px] text-grayLight">
            Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
          </p>
          <h3 className="text-golden text-[20px] font-cormorant">
            Opening Hours
          </h3>
          <p className="text-[10px]  ">Mon - Fri: 10:00 am - 02:00 am</p>
          <p className="text-[10px]  ">Sat - Sun: 10:00 am - 03:00 am</p>
        </div>
        <Button className="hidden sm:flex" title="visit us" />
      </div>
      <div className="flex justify-center items-center w-[200px] h-[300px]">
        <img
          className="w-full h-full object-cover"
          src={findUsImg}
          alt="findUsImg"
        />
      </div>
      <Button className="sm:hidden" title="visit us" />
    </section>
  );
};

export default ContactUs;
