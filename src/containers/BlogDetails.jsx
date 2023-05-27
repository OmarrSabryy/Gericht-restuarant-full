import React from "react";
import { SideBar } from "../containers";
import { BlogTip, BlogDetailTag } from "../components";
const BlogDetails = (props) => {
  const tips = props.blogDetails?.tips.map((tip) => (
    <BlogTip key={tip.id} tip={tip} />
  ));
  return (
    <div className="relative w-full section_colomn text-white sm:flex-row-reverse sm:items-start">
      <SideBar className="absolute top-0 z-10 sm:top-auto sm:right-auto sm:static" />
      <div className="flex flex-col">
        <p className="text-[8px] text-grayLight">{props.content}</p>
        {tips && (
          <div className="flex flex-col justify-center items-center gap-4">
            {tips}
          </div>
        )}
        {props.blogDetails.tags && (
          <BlogDetailTag tags={props.blogDetails.tags} />
        )}
      </div>
    </div>
  );
};

export default BlogDetails;
