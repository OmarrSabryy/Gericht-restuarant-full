import React from "react";
import "./App.css";
import { Navbar } from "./components";
import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  BarPage,
  ServicesPage,
  AboutUsPage,
  ContactUsPage,
  TeamPage,
  ChefDetailsPage,
  BlogsPage,
  BlogDetailsPage,
  ComingSoonPage,
  PageNotFound,
} from "./pages";
const App = () => {
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bar" element={<BarPage />} />
          <Route path="/ourServices" element={<ServicesPage />} />
          <Route path="/aboutUs" element={<AboutUsPage />} />
          <Route path="/contactUs" element={<ContactUsPage />} />
          <Route path="/ourTeam">
            <Route index element={<TeamPage />} />
            <Route path=":chefId" element={<ChefDetailsPage />} />
          </Route>
          <Route path="/blogs">
            <Route index element={<BlogsPage />} />
            <Route path=":blogId" element={<BlogDetailsPage />} />
          </Route>
          <Route path="/commingSoon" element={<ComingSoonPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
