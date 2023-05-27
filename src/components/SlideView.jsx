import React, { useRef } from "react";
import { ImgCard } from "../ui";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";
const SlideView = (props) => {
  const slideRef = useRef();
  const scroll = (direction) => {
    console.log(props.imgWidth);
    if (direction === "left") slideRef.current.scrollLeft -= props.imgWidth;
    else slideRef.current.scrollLeft += props.imgWidth;
  };
  const cardsList = props.images.map((image) => (
    <ImgCard key={image.id} img={image.img} imgWidth={props.imgWidth} />
  ));
  return (
    <div
      className=" flex w-max overflow-x-scroll justify-start items-center gap-2  scrollbar-hide transition-all delay-300"
      ref={slideRef}
    >
      {cardsList}
      <div className="absolute w-full flex justify-between items-center p-2">
        <TiArrowLeftThick
          className="bg-dimBlack p-1 cursor-pointer"
          color="white"
          size={25}
          onClick={() => scroll("left")}
        />
        <TiArrowRightThick
          className="bg-dimBlack p-1 cursor-pointer"
          color="white"
          size={25}
          onClick={() => scroll("right")}
        />
      </div>
    </div>
  );
};

export default SlideView;
