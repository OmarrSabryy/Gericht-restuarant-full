import React from "react";
import { Button } from "../components";
const ContactForm = () => {
  return (
    <div className="section font-cormorant text-grayLight text-[10px] sm:text-[16px]">
      <form
        className="flex flex-col justify-center items-center gap-4 w-full sm:items-start"
        action="#"
      >
        <input
          className="bg-transparent  border-[1px] border-gray-800 p-1 w-full "
          type="text"
          placeholder="Full Name"
        />
        <input
          className="bg-transparent  border-[1px] border-gray-800 p-1 w-full"
          type="email"
          placeholder="Email Address"
        />
        <textarea
          className="bg-transparent  border-[1px] border-gray-800 p-1 resize-none w-full"
          name="message"
          id="message"
          placeholder="Message"
          rows={5}
        ></textarea>
        <Button title="subscribe" />
      </form>
    </div>
  );
};

export default ContactForm;
