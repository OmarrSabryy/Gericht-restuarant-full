import React from "react";

const Header = (props) => {
  return (
    <section className='bg-[url("/src/assets/headerImg.png")] bg-cover w-full h-[200px] section capitalize font-cormorant flex justify-center items-center relative'>
      <div className="w-full h-full absolute bg-dimBlack opacity-50" />
      <div className="z-[2] flex flex-col justify-center items-center gap-2">
        <h1 className="text-[35px] text-golden  font-semibold text-center">
          {props.title}
        </h1>
      </div>
    </section>
  );
};

export default Header;
