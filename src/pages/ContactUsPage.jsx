import React from "react";
import { Header, Map, ClientMessage, Footer } from "../containers";
import { useLocation } from "react-router-dom";
const ContactUsPage = () => {
  const location = useLocation();
  return (
    <div className="page">
      <Header location={location.pathname} title="contact us" />
      <Map />
      <ClientMessage />
      <Footer />
    </div>
  );
};

export default ContactUsPage;
