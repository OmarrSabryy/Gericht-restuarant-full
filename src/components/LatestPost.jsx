import React from "react";
import { Blog } from "../components";
import { blogs } from "../constants";
const maxDate = new Date(Math.max(...blogs.map((blog) => new Date(blog.date))));
const day = maxDate.toLocaleDateString("en-us", { day: "numeric" });
const month = maxDate.toLocaleDateString("en-us", { month: "short" });
const year = maxDate.toLocaleDateString("en-us", { year: "numeric" });
const latestBlog = blogs.find(
  (blog) => blog.date === `0${day} ${month} ${year}`
);
console.log(latestBlog);
const LatestPost = () => {
  return (
    <div className="flex flex-col justify-center items-start gap-2 p-4 bg-darkGrey font-cormorant capitalize w-[200px]">
      <h1 className="text-[20px] text-golden">our latest posts</h1>
      <Blog
        img={latestBlog.img}
        title={latestBlog.title}
        content={latestBlog.content}
        author={latestBlog.author}
        date={latestBlog.date}
      />
    </div>
  );
};

export default LatestPost;
