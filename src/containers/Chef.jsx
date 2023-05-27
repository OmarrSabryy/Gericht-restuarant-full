import React from "react";
import { chef, qoute, signature } from "../assets";
import { SubHeader } from "../components";
const Chef = () => {
  return (
    <section className="section_colomn min-h-screen font-poppins text-grayLight capitalize gap-4 sm:flex-row">
      <div className="flex justify-center items-center ">
        <img
          className="sm:w-[900px] h-[350px] object-contain"
          src={chef}
          alt="chef"
        />
      </div>
      <div className="flex flex-col gap-4 justify-center items-start">
        <div className="flex flex-col gap-2">
          <SubHeader title="chef's word" />
          <h1 className="font-cormorant text-golden text-[30px]">
            what we believe in
          </h1>
        </div>
        <div className="flex flex-col justify-center items-start gap-2">
          <div className="flex justify-start items-start">
            <img className="w-[15px] h-[20px]" src={qoute} alt="qoute" />
            <p className="text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor
              sit.
            </p>
          </div>
          <p className="text-[14px]">
            auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
            sit. Nulla scelerisque scelerisque congue ac consequat, aliquam
            molestie lectus eu. Congue iaculis integer curabitur semper sit
            nunc.
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="font-cormorant text-golden text-[20px]">Kevin Luo</h3>
          <p className="text-[14px]">Chef & Founder</p>
        </div>
        <div className="flex justify-start items-center w-[10rem] h-[4rem]">
          <img
            className="object-contain w-full h-full"
            src={signature}
            alt="signature"
          />
        </div>
      </div>
    </section>
  );
};

export default Chef;
