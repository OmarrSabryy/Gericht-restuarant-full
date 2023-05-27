import React from "react";
import {
  Header,
  History,
  About,
  Chef,
  Testimonials,
  Gallery,
  Footer,
} from "../containers";
import { useLocation } from "react-router-dom";
const AboutUsPage = () => {
  const location = useLocation();
  return (
    <div className="page slide-right">
      <Header title="Welcome to Gerícht" location={location.pathname} />
      <History />
      <About />
      <Chef />
      <Testimonials />
      <Gallery />
      <Footer />
    </div>
  );
};

export default AboutUsPage;
