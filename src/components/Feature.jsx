import React from "react";
import { spoon } from "../assets";
const Feature = (props) => {
  return (
    <div className="flex flex-col justify-center items-start gap-1 text-grayLight font-cormorant text-left">
      <h2 className="text-[20px] font-semibold text-golden">{props.value}</h2>
      <img className="h-[4px]" src={spoon} alt="spoon" />
      <h3 className="text-[18px]">{props.title}</h3>
    </div>
  );
};

export default Feature;
