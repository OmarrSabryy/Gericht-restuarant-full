import React from "react";
import { Cta, Contact, SocialLinks, WorkingHours } from "../components";
const Footer = () => {
  return (
    <section className="section_colomn min-h-screen font-cormorant text-white gap-8 sm:gap-16">
      <Cta />
      <div className="flex flex-col justify-center items-center gap-4 sm:flex-row">
        <Contact />
        <SocialLinks />
        <WorkingHours />
      </div>
      <p className="text-grayLight text-[10px] font-poppins">
        2021 Gerícht. All Rights reserved.
      </p>
    </section>
  );
};

export default Footer;
