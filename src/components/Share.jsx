import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
const Share = () => {
  return (
    <div className="flex flex-col justify-center items-start gap-3 p-4 bg-darkGrey font-cormorant capitalize w-[200px]">
      <h1 className="text-golden text-[20px]">share</h1>
      <div className="flex justify-center items-center gap-2">
        <FaFacebookF
          size={11}
          className="hover:text-golden text-white"
          cursor="pointer"
        />
        <FaTwitter
          size={11}
          cursor="pointer"
          className="hover:text-golden text-white"
        />
        <FaInstagram
          size={11}
          cursor="pointer"
          className="hover:text-golden text-white"
        />
      </div>
    </div>
  );
};

export default Share;
