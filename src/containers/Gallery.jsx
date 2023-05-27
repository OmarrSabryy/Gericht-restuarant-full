import React from "react";
import { SubHeader, SlideView, Button } from "../components";
import { gallery } from "../constants";
// import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";
const Gallery = () => {
  return (
    <section className="flex flex-col gap-8 my-8 justify-center items-center w-full p-8 capitalize sm:flex-row">
      <div className="flex-1 flex flex-col justify-center items-center gap-2 sm:items-start">
        <SubHeader title="instagram" />
        <h1 className="text-[30px] text-golden font-cormorant font-semibold">
          photo gallery
        </h1>
        <p className="text-[10px] text-grayLight font-poppins normal-case text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <Button className="hidden sm:flex" title="view more" />
      </div>
      <div className="flex flex-1 max-w-[100%] overflow-hidden relative justify-center items-center">
        <SlideView images={gallery} imgWidth={200} />
      </div>
      <Button title="view more" className="sm:hidden" />
    </section>
  );
};

export default Gallery;
