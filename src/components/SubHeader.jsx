import React from "react";
import { spoon } from "../assets";
const SubHeader = (props) => {
  return (
    <div className="flex flex-col justify-center items-start font-cormorant text-white text-[16px] capitalize">
      <h3> {props.title} </h3>
      <img className="w-[20px]" src={spoon} alt="spoon" />
    </div>
  );
};

export default SubHeader;
