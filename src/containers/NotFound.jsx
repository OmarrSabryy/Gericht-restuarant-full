import React from "react";
import { spoon } from "../assets";
import { Button } from "../components";
const NotFound = () => {
  return (
    <div className="section_colomn min-h-screen font-cormorant text-white text-center ">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[100px] text-golden m-0 p-0">404</h1>
        <img src={spoon} alt="spoon" />
      </div>
      <p>
        Oops! The page you are looking for does not exist. It might have been
        moved or deleted.
      </p>
      <Button title="back to home" to="/" />
    </div>
  );
};

export default NotFound;
