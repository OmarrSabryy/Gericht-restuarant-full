import React from "react";
import { tags } from "../constants";
const tagsList = tags.map((tag) => <p key={tag.id}>{tag.name}</p>);
const Tags = () => {
  return (
    <div className="flex flex-col justify-center items-start gap-2 p-4 bg-darkGrey font-cormorant capitalize w-[200px]">
      <h1 className="text-[20px] text-golden">related tags</h1>
      <div className=" w-full flex justify-start items-center gap-4 flex-wrap text-[8px] text-grayLight font-poppins">
        {tagsList}
      </div>
    </div>
  );
};

export default Tags;
