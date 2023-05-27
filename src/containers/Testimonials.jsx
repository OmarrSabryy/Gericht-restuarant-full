import React from "react";
import { spoon } from "../assets";
import { Testimonial } from "../components";
import { customers } from "../constants";
const customersList = customers.map((customer) => (
  <Testimonial
    key={customer.id}
    text={customer.text}
    author={customer.author}
    img={customer.img}
    title={customer.title}
  />
));
const Testimonials = () => {
  return (
    <section className="section_colomn min-h-screen bg-dimBlack capitalize font-cormorant">
      <div className="flex flex-col justify-center items-center gap-2 ">
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-white">testimony</h3>
          <img src={spoon} alt="spoon" />
        </div>
        <h1 className="text-golden text-[30px] font-semibold w-full text-center">
          happy customers
        </h1>
      </div>
      <div className=" flex flex-col justify-center items-center gap-4 sm:grid sm:grid-cols-2">
        {customersList}
      </div>
    </section>
  );
};

export default Testimonials;
