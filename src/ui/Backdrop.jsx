import React from "react";
import ReactDOM from "react-dom";
const Background = (props) => (
  <div
    className={`${props.classes} w-full min-h-full absolute z-10 bg-dimBlack flex justify-center items-center`}
  >
    {props.children}
  </div>
);
const portal = document.getElementById("overlay");
const Backdrop = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Background classes={props.className} children={props.children} />,
        portal
      )}
    </>
  );
};

export default Backdrop;
