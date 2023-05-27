import React from "react";
import { Button, Blog } from "../components";
import { spoon } from "../assets";
import { blogs } from "../constants";
const blogsList = blogs.map((blog) => (
  <Blog
    key={blog.id}
    id={blog.id}
    img={blog.img}
    date={blog.date}
    author={blog.author}
    title={blog.title}
    content={blog.content}
  />
));
const Blogs = () => {
  return (
    <section className="section_colomn bg-dimBlack min-h-screen font-cormorant capitalize">
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="flex flex-col justify-center items-center">
          <h3 className=" text-white">blogs</h3>
          <img className="w-[20px]" src={spoon} alt="spoom" />
        </div>
        <h1 className="text-golden text-[30px] font-semibold">
          Gerícht updates
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 sm:grid sm:grid-cols-2">
        {blogsList}
      </div>
      <Button title="view more" />
    </section>
  );
};

export default Blogs;
