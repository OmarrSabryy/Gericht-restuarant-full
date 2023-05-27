import React from "react";
import { qoute } from "../assets";
const Testimonial = (props) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="flex flex-1 justify-center items-center relative w-[80px] h-[80px] ">
        <img
          className="object-cover w-full h-full"
          src={props.img}
          alt={`${props.img}`}
        />
        <img
          className="absolute w-[21px] h-[14px] right-[-0.5rem] bottom-[-0.5rem]"
          src={qoute}
          alt="qoute"
        />
      </div>
      <div className="flex flex-col justify-center items-center flex-[2] text-center">
        <p className="text-[10px] italic text-grayLight font-poppins normal-case">
          {props.text}
        </p>
        <h3 className="text-[16px] font-cormorant text-golden">
          {props.author}
        </h3>
        <p className="text-[12px] font-poppins text-crimson"> {props.title} </p>
      </div>
    </div>
  );
};

export default Testimonial;
