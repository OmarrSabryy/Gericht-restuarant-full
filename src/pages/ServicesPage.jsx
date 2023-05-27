import React from "react";
import {
  Header,
  ServingQuality,
  Menus,
  Reservation,
  HappyHours,
  Footer,
} from "../containers";
import { useLocation } from "react-router-dom";

const ServicesPage = () => {
  const location = useLocation();
  return (
    <div className="page">
      <Header title="what we offer" />
      <ServingQuality />
      <Menus />
      <Reservation />
      <HappyHours />
      <Footer />
    </div>
  );
};

export default ServicesPage;
