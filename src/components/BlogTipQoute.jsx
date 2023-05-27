import React from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
const BlogTipQoute = (props) => {
  return (
    <div className="flex relative justify-center items-center bg-dimWhite gap-2 py-4 px-8  border-[0.5px] border-golden font-cormorant capitalize">
      <RiDoubleQuotesL
        size={25}
        className="absolute top-[-5px] left-0 rotate-[-5deg]"
      />
      <p className="text-[12px] text-white sm:text-[30px]">{props.qoute}</p>
      <RiDoubleQuotesR
        size={25}
        className="absolute bottom-[-5px] right-0 rotate-[-5deg] "
      />
    </div>
  );
};

export default BlogTipQoute;
