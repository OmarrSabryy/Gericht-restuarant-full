import React from "react";
import { Link } from "react-router-dom";

const Menus = () => {
  return (
    <section className="w-full z-0 bg-[url('/src/assets/menusV.PNG')] md:bg-[url('/src/assets/menus.PNG')] bg-cover min-h-screen  flex flex-col justify-center items-center text-white font-cormorant capitalize text-[20px] sm:flex-row  sm:bg-[url('src/assets/menus.PNG')] ">
      <div className="flex-1 flex justify-center items-center w-full z-10 bg-slate-950 bg-opacity-60">
        <p className="opacity-60 hover:opacity-100 duration-300 cursor-pointer text-[30px] font-semibold">
          <Link to="/commingSoon">bar menu</Link>
        </p>
      </div>
      <div className="flex-1 flex justify-center items-center w-full z-10 bg-slate-950 bg-opacity-60">
        <p className="opacity-60 hover:opacity-100 duration-300 cursor-pointer text-[30px] font-semibold">
          <Link to="/commingSoon">food menu</Link>
        </p>
      </div>
      <div className="flex-1 flex justify-center items-center w-full  z-10 bg-slate-950 bg-opacity-60">
        <p className="opacity-60 hover:opacity-100 duration-300 cursor-pointer  text-[30px] font-semibold">
          <Link to="/commingSoon">dessert menu</Link>
        </p>
      </div>
    </section>
  );
};

export default Menus;
