import React from "react";
import { spoon } from "../assets";
import { Button } from "../components";
const ServingQuality = () => {
  return (
    <section className="section_colomn min-h-screen font-cormorant text-white capitalize bg-dimBlack">
      <div className="flex flex-col justify-center items-center ">
        <h3>serving quality</h3>
        <img src={spoon} alt="spoon" />
      </div>
      <h1 className="text-[30px] text-center text-golden font-semibold">
        We at Gericth are serving our customers for over a decade.
      </h1>
      <p className="font-poppins text-center text-[10px] text-grayLight">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
        adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet
        eu proin mauris et.
      </p>
      <div className="flex justify-center items-center gap-4">
        <Button title="read more" />
        <Button
          title="contact us"
          className="text-white border-[1px] border-golden bg-transparent "
        />
      </div>
    </section>
  );
};

export default ServingQuality;
