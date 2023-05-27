import React from "react";
import { BlogTipQoute } from "../components";
const blogTip = (props) => {
  let media;
  if (props.tip.media.includes(".png")) {
    media = (
      <img
        className="w-[100%] h-full object-cover"
        src={props.tip.media}
        alt="tipMedia"
      />
    );
    console.log("img");
  } else {
    media = (
      <video
        className="w-[100%] h-full object-cover"
        src={props.tip.media}
        controls={false}
        loop
        autoPlay
        muted
        title="introVideo"
      />
    );
    console.log("vid");
  }
  const steps = props.tip.steps.map((step) => (
    <div key={step.id} className="flex justify-start items-center gap-1">
      <div className="h-[0.1px] w-[8px] bg-golden"></div>
      <p>{step.text}</p>
    </div>
  ));
  return (
    <div className="flex flex-col justify-center items-start text-[8px] font-poppins gap-4 text-grayLight">
      <h1 className="font-cormorant text-[16px] capitalize text-golden sm:text-[25px]">
        {props.tip.title}
      </h1>
      <p className="sm:text-[12px]">{props.tip.description}</p>
      <div className="flex flex-col sm:text-[14px] ">{steps}</div>
      <div className="flex justify-start items-center sm:w-[500px] sm:h-[200px]">
        {media}
      </div>
      <p className="sm:text-[12px]">{props.tip.mediaDesc}</p>
      {props.tip.tipQoute && <BlogTipQoute qoute={props.tip.tipQoute} />}
    </div>
  );
};

export default blogTip;
