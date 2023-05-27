import React from "react";

const ImgBanner = (props) => {
  return (
    <div
      className={`group flex justify-center items-center relative w-[${props.width}px] h-[${props.height}px] border-stone-800 border-[1px] cursor-pointer `}
    >
      <img
        className="w-full h-full object-cover"
        src={props.img}
        alt={`${props.img}`}
      />
      <div className="flex justify-center items-center absolute w-full h-full bg-dimBlack bg-opacity-50 opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
        <h2 className="text-[20px] capitalize text-white font-cormorant z-10">
          {props.title}
        </h2>
      </div>
    </div>
  );
};

export default ImgBanner;
