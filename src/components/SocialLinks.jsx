import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { spoon } from "../assets";
const SocialLinks = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 text-white font-poppins">
      <h1 className="font-cormorant text-[30px] text-golden capitalize font-semibold">
        Gerícht
      </h1>
      <div className="flex flex-col justify-center items-center gap-2 text-center">
        <p className="text-[12px]">
          "The best way to find yourself is to lose yourself in the service of
          others.”
        </p>
        <img className="w-[20px] h-[6px]" src={spoon} alt="spooon" />
        <div className="flex justify-center items-center gap-2">
          <FaFacebookF cursor="pointer" color="#fff" />
          <FaTwitter cursor="pointer" color="#fff" />
          <FaInstagram cursor="pointer" color="#fff" />
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
