import React from "react";

const HappyHours = () => {
  return (
    <section
      className="relative flex justify-center items-center bg-[url('/src/assets/happyHours.png')] h-[200px]  bg-cover w-full
    my-4"
    >
      <div className="absolute w-full h-full bg-dimBlack bg-opacity-30" />
      <div className=" flex flex-col gap-4 justify-center items-center font-cormorant text-white ">
        <h1 className="text-[40px] capitalize text-crimson font-semibold">
          happy hours
        </h1>
        <h3 className="text-[12px] font-poppins">
          Monday - Friday (4:00 Pm - 7:00 Pm)
        </h3>
      </div>
    </section>
  );
};

export default HappyHours;
