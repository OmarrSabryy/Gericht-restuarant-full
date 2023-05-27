import React from "react";
import { Link } from "react-router-dom";

const Blog = (props) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 capitalize font-poppins w-full text-white">
      <div className="flex justify-center items-center w-[170px] h-[170px] border-stone-800 border-[1px] hover:scale-105 duration-300">
        <img
          className="w-full h-full object-cover cursor-pointer "
          src={props.img}
          alt={`${props.img}`}
        />
      </div>
      <div className="flex justify-between items-center w-full text-[10px]">
        <p>{props.date}</p>
        <p className="self-end">{props.author}</p>
      </div>
      <h2 className="font-cormorant text-[18px] text-golden">{props.title}</h2>
      <p className="text-[10px] text-grayLight">{props.content}</p>
      <Link
        to={`/blogs/${props.id}`}
        className="self-start font-cormorant text-[12px] text-golden"
      >
        read more
      </Link>
    </div>
  );
};

export default Blog;
