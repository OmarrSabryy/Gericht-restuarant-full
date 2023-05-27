import React from "react";
import { BsSearch } from "react-icons/bs";
const Search = () => {
  return (
    <div className="flex flex-col justify-center items-start gap-2 p-4 bg-darkGrey font-cormorant capitalize w-[200px]">
      <h1 className="text-[20px] text-golden">search page</h1>
      <div className="w-full flex justify-center items-center relative">
        <input
          className="w-full bg-transparent outline-none border-b border-dimWhite text-grayLight font-poppins text-[8px] pb-[1px]"
          type="text"
          placeholder="Example"
        />
        <BsSearch
          cursor="pointer"
          size={10}
          color="#fff"
          className="absolute right-0 mb-[1px]"
        />
      </div>
    </div>
  );
};

export default Search;
