import React, { useRef, useState } from "react";
import { introVid } from "../assets";
import { BiPause, BiPlay } from "react-icons/bi";
const Intro = () => {
  const [togglePlay, setTogglePlay] = useState(false);
  const vidRef = useRef();
  const vidControlHandler = () => {
    setTogglePlay((prev) => !prev);
  };
  if (togglePlay) vidRef.current?.play();
  else vidRef.current?.pause();
  return (
    <section className="flex justify-center items-center my-4 w-full">
      <div className="flex justify-center items-center w-[100%] h-full relative">
        <video
          className="w-[100%] h-full object-contain"
          src={introVid}
          controls={false}
          loop
          muted
          title="introVideo"
          ref={vidRef}
        ></video>
        <div className="group absolute w-full h-full bg-dimBlack bg-opacity-20 hover:bg-opacity-0 duration-300 flex justify-center items-center">
          <div className="hidden group-hover:flex justify-center items-center w-[3rem] h-[3rem] rounded-full border-[0.1px] border-white pointer-events-none">
            {togglePlay ? (
              <BiPause
                onClick={vidControlHandler}
                className="pointer-events-auto duration-300"
                color="white"
                cursor="pointer"
              />
            ) : (
              <BiPlay
                onClick={vidControlHandler}
                className="pointer-events-auto duration-300"
                color="white"
                cursor="pointer"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
