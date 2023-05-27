import React from "react";
import {
  HeaderHome,
  AboutHome,
  Reservation,
  Menus,
  SpecialMenu,
  Chef,
  Testimonials,
  Intro,
  Laurels,
  Blogs,
  Gallery,
  Footer,
} from "../containers";
const HomePage = () => {
  return (
    <div className="page slide-right">
      <HeaderHome />
      <AboutHome />
      <Reservation />
      <Menus />
      <SpecialMenu />
      <Chef />
      <Testimonials />
      <Intro />
      <Laurels />
      <Blogs />
      <Gallery />
      <Footer />
    </div>
  );
};

export default HomePage;
