import React from "react";
import { BsInstagram } from "react-icons/bs";
const ImgCard = (props) => {
  return (
    <div
      className={`group flex justify-center items-center min-w-[200px] border-stone-700 border-[2px] h-[300px] relative cursor-pointer duration-300 delay-300`}
    >
      <img
        className={`w-[200px] h-full object-cover`}
        src={props.img}
        alt={`${props.img}`}
      />
      <div className=" w-full h-full bg-dimBlack bg-opacity-50 opacity-0 absolute flex group-hover:opacity-100 transition delay-200 duration-300 ease-in-out justify-center items-center">
        <BsInstagram className="z-10" color="white" size={25} />
      </div>
    </div>
  );
};

export default ImgCard;
