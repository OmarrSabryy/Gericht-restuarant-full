import React, { useState } from "react";
import { BsCheck } from "react-icons/bs";
const Checkbox = (props) => {
  const [checked, setChecked] = useState(false);
  return (
    <div
      className={`${props.className} flex w-full justify-start items-start gap-1 font-poppins`}
    >
      <div
        id="check"
        className="flex justify-center items-center p-[5px] w-[12px] h-[12px] bg-transparent border-[0.5px] border-stone-700  mt-[2px]"
        onClick={() => setChecked((prev) => !prev)}
      >
        {checked && <span>✔</span>}
      </div>
      <label
        className="text-grayLight"
        htmlFor="check"
        onClick={() => setChecked((prev) => !prev)}
      >
        {props.label}
      </label>
    </div>
  );
};

export default Checkbox;
