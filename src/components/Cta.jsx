import React from "react";
import { Button } from "../components";
import { spoon } from "../assets";
const Cta = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 bg-dimBlack text-white font-cormorant capitalize border-stone-800 border-[1px] p-4 sm:p-8">
      <div className="flex flex-col justify-center items-center">
        <h3>newsletter</h3>
        <img src={spoon} alt={`${spoon}`} />
      </div>
      <h1 className="text-[27px] font-semibold text-golden text-center sm:text-[50px]">
        subscribe to our newsletter
      </h1>
      <p className="font-poppins text-[10px] normal-case font-light sm:text-[16px]">
        And never miss latest Updates!
      </p>
      <div className="flex flex-col justify-center items-center gap-4 sm:flex-row sm:w-full">
        <input
          type="email"
          placeholder="Email Address"
          className="flex-1 bg-transparent text-[14px] p-1 border-stone-800 border-[1px] outline-none"
        />
        <Button className="flex-[0.3]" title="subscribe" />
      </div>
    </div>
  );
};

export default Cta;
