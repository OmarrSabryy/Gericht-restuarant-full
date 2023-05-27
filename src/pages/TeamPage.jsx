import React from "react";
import { Header, Team, Intro, Laurels, Footer } from "../containers";
import { useLocation } from "react-router-dom";
const TeamPage = () => {
  const location = useLocation();
  return (
    <div className="page">
      <Header location={location.pathname} title="our chefs" />
      <Team />
      <Intro />
      <Laurels />
      <Footer />
    </div>
  );
};

export default TeamPage;
