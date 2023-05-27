import React from "react";

const BlogDetailHead = (props) => {
  return (
    <div className="section_colomn text-white">
      <div className="flex justify-between items-center w-full text-[10px] font-poppins">
        <p>{props.date}</p>
        <p>{props.author}</p>
      </div>
      <h1 className="text-[20px] capitalize text-golden font-cormorant self-start text-center sm:text-[30px]">
        {props.title}
      </h1>
      <div className="flex justify-center items-center w-full h-[120px] sm:h-[200px]">
        <img
          className="w-full h-full object-cover"
          src={props.img}
          alt={`${props.img}`}
        />
      </div>
    </div>
  );
};

export default BlogDetailHead;
