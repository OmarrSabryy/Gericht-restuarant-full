import React from "react";
import { Button, Checkbox } from "../components";
const CommentForm = () => {
  return (
    <form className="flex flex-col justify-center items-start gap-2 text-grayLight w-full max-w-[400px] font-cormorant  text-[12px]">
      <h1 className="text-golden  capitalize text-[20px]">post a comment</h1>
      <textarea
        className="resize-none bg-transparent border-[0.5px] border-stone-700 outline-none  w-full px-2 py-3 "
        name="comment"
        id="comment"
        placeholder="Comment Here..."
      />
      <div className="flex flex-col w-full justify-center items-start gap-2 ">
        <input
          className=" w-full bg-transparent border-[0.5px] border-stone-700  outline-none p-1  "
          type="text"
          placeholder="First Name"
        />
        <input
          className=" w-full bg-transparent border-[0.5px] border-stone-700  outline-none p-1  "
          type="text"
          placeholder="Last Name"
        />
      </div>
      <Checkbox
        className="text-crimson text-[10px]"
        label="Save my name and email in this browser for the next time I comment."
      />
      <Button title="Submit" />
    </form>
  );
};

export default CommentForm;
