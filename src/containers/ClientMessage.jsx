import React from "react";
import { ContactForm } from "../components";
import { laurelsImg } from "../assets";
const ClientMessage = () => {
  return (
    <section className="section_colomn sm:flex-row">
      <ContactForm />
      <div className="flex justify-center items-center w-[200px] h-[300px] sm:w-[500px] sm:h-[400px]">
        <img
          className="w-full h-full object-cover"
          src={laurelsImg}
          alt="laurelsImg"
        />
      </div>
    </section>
  );
};

export default ClientMessage;
