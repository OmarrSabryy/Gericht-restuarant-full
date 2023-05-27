import React from "react";
import {
  HeaderBar,
  Reservation,
  AboutBar,
  Poison,
  HappyHours,
  SpecialMenu,
  ContactUs,
  Footer,
} from "../containers";
const BarPage = () => {
  return (
    <div className="page slide-right">
      <HeaderBar />
      <Reservation />
      <AboutBar />
      <Poison />
      <HappyHours />
      <SpecialMenu />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default BarPage;
