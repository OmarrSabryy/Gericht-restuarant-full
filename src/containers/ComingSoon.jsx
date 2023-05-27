import React from "react";
import { spoon } from "../assets";
import { Button } from "../components";
const ComingSoon = () => {
  return (
    <div className="section_colomn min-h-screen text-grayLight font-cormorant text-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[40px] text-golden">Coming Soon</h1>
        <img src={spoon} alt="spoon" />
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique
        feugiat orci tristique bibendum sollicitudin at aliquam. Nulla varius
        augue eu orci vel.
      </p>
      <Button title="back to home" to="/" />
    </div>
  );
};

export default ComingSoon;
