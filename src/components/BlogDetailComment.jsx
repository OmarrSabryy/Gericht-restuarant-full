import React from "react";

const BlogDetailComment = (props) => {
  return (
    <div className="flex w-full flex-col justify-center items-start text-[8px] font-poppins text-grayLight p-4 gap-2 bg-black">
      <div className="w-[50px] h-[50px]">
        <img
          className="w-full h-full object-cover"
          src={props.comment.commentAuthImg}
          alt="authorImg"
        />
      </div>
      <div className="flex flex-col justify-center items-start gap-1">
        <h2 className="text-[16px] font-cormorant text-white">
          {props.comment.commentAuth}
        </h2>
        <p>{props.comment.commentDate}</p>
        <p>{props.comment.content}</p>
        <div></div>
      </div>
      <p className="cursor-pointer capitalize">reply</p>
    </div>
  );
};

export default BlogDetailComment;
