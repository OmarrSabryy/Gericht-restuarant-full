import React from "react";
import { BiHeart, BiComment } from "react-icons/bi";
const BlogDetailsTags = (props) => {
  const tags = props.tags.map((tag) => <p key={tag.id}>#{tag.text}</p>);
  return (
    <div className="flex justify-between items-center w-full text-[8px] capitalize sm:text-[12px]">
      <div className="flex justify-center items-center gap-1 text-grayLight">
        {tags}
      </div>
      <div className="flex justify-center items-center gap-2">
        <div className="flex justify-center items-center gap-1 ">
          <BiComment size={12} className="text-golden" />
          <p className="cursor-pointer">
            <a href="#addComment">Comment</a>
          </p>
        </div>
        <div className="flex justify-center items-center gap-1 ">
          <BiHeart size={12} className="text-golden" />
          <p className="cursor-pointer">like</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsTags;
