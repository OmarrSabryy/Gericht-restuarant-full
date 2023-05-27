import React from "react";
import { Header, SideBar, Blogs, Footer } from "../containers";
const BlogsPage = () => {
  return (
    <div className="page">
      <Header location="ourBlogs" title="our blogs" />
      <div className="flex justify-center items-center w-full relative h-full sm:flex-row-reverse bg-dimBlack p-4 ">
        <SideBar className="absolute top-0 z-10 sm:top-auto sm:right-auto sm:static" />
        <Blogs />
      </div>
      <Footer />
    </div>
  );
};

export default BlogsPage;
