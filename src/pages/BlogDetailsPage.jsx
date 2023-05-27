import React from "react";
import { Header, BlogDetails, Footer } from "../containers";
import { BlogDetailHead, BlogDetailComment, CommentForm } from "../components";
import { useParams } from "react-router-dom";
import { blogs, blogsDetails, blogComments } from "../constants";
const BlogDetailsPage = () => {
  const params = useParams();
  const blog = blogs.find((blog) => blog.id === params.blogId);
  const blogDetails = blogsDetails.find(
    (blogDetails) => blogDetails.id === blog.detailId
  );
  const blogCommentsList = blogComments.find(
    (list) => list.blogId === blog.detailId
  ).comments;
  const comments = blogCommentsList.map((comment) => (
    <BlogDetailComment key={comment.commentId} comment={comment} />
  ));
  return (
    <div className="page">
      <Header title="our blogs" location="ourBlogs" />
      <div className="flex flex-col justify-center items-center gap-4 bg-dimBlack">
        <BlogDetailHead
          date={blog.date}
          author={blog.author}
          title={blog.title}
          img={blog.img}
        />
        <BlogDetails blogDetails={blogDetails} content={blog.content} />
        <div className="section_colomn">
          <h2 className="self-start font-cormorant text-golden">
            Comments(<span className="font-poppins text-[12px]">3</span>)
          </h2>
          {comments}
        </div>
        <div id="addComment" className="section_start items-start mb-4">
          <CommentForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetailsPage;
