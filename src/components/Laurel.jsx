import React from "react";

const Laurel = (props) => {
  return (
    <div className="flex justify-center items-center gap-4">
      <div className="flex justify-center items-center w-[4rem] h-[4rem]">
        <img
          className="w-full h-full object-contain"
          src={props.img}
          alt={`${props.img}`}
        />
      </div>
      <div>
        <h3 className="text-golden font-cormorant text-[16px] capitalize">
          {props.title}
        </h3>
        <p className="font-poppins text-[10px] text-grayLight">
          {props.content}
        </p>
      </div>
    </div>
  );
};

export default Laurel;
