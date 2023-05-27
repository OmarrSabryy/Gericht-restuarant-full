import React from "react";
import { letterG, knife, spoon } from "../assets";
import { Button } from "../components";
const AboutHome = () => {
  return (
    <section className="section_colomn relative min-h-screen sm:flex-row sm:gap-8">
      <div className="section absolute inset-0 w-full h-full -z-10">
        <img className="sm:w-[250px] sm:h-[300px]" src={letterG} alt="G" />
      </div>
      <div className="flex flex-col justify-center items-start font-poppins w-full self-start gap-4 sm:self-center sm:items-end sm:text-right">
        <div className="flex flex-col justify-center items-start">
          <h1 className="font-cormorant capitalize text-golden text-[30px] font-medium">
            About us
          </h1>
          <img className="self-end" src={spoon} alt="spoon" />
        </div>
        <p className="text-grayLight text-[10px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem,
          provident dolore dignissimos sed dicta dolorum quaerat aliquid soluta
          consectetur, accusantium natus, tenetur alias porro nihil veritatis
          magni. Rerum, in eligendi.
        </p>
        <Button title="know more" to="/aboutUs" />
      </div>
      <div className="flex justify-center items-center w-[45px] h-[450px] sm:w-[80px] sm:h-[600px]">
        <img className="object-cover w-full h-full" src={knife} />
      </div>
      <div className="flex flex-col justify-center items-end font-poppins w-full self-end gap-4 text-right sm:self-center sm:items-start sm:text-left">
        <div className="flex flex-col ">
          <h1 className="font-cormorant capitalize text-golden text-[30px] font-medium">
            our history
          </h1>
          <img
            className="rotate-180 self-end sm:self-start"
            src={spoon}
            alt="spoon"
          />
        </div>
        <p className="text-grayLight text-[10px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem,
          provident dolore dignissimos sed dicta dolorum quaerat aliquid soluta
          consectetur, accusantium natus, tenetur alias porro nihil veritatis
          magni. Rerum, in eligendi.
        </p>
        <Button title="know more" to="/aboutUs" />
      </div>
    </section>
  );
};

export default AboutHome;
