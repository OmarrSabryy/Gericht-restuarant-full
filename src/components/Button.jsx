import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <button
      className={`${props.className} flex justify-center items-start bg-golden text-black font-cormorant font-semibold rounded-sm px-2 py-1 text-[14px] capitalize`}
    >
      <Link to={props.to}>{props.title}</Link>
    </button>
  );
};

export default Button;
