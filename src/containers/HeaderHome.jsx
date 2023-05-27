import React from "react";
import { homeImg, homeImgSmScreen } from "../assets";
import { SubHeader, Button } from "../components";
import { Link } from "react-router-dom";
const HeaderHome = () => {
  return (
    <section className="w-full section_colomn text-white font-poppins gap-2 bg-dimBlack py-4 min-h-screen sm:flex-row">
      <div className="flex flex-col justify-center items-center sm:flex-row ">
        <div className="flex items-center justify-evenly w-full text-[12px] cursor-pointer flex-row-reverse sm:rotate-[-90deg] sm:flex-[0.1]">
          <Link to="/bar">#Bar</Link>
          <Link className="sm:mr-8" to="/">
            #Gericht
          </Link>
        </div>
        <div className="flex flex-col justify-center items-start gap-2">
          <SubHeader title="Chase the new Flavour" />
          <h1 className="text-golden font-cormorant text-[40px] font-semibold capitalize md:text-[50px] lg:text-[90px] ">
            The key to Fine dining
          </h1>
          <p className="text-grayLight text-[12px] lg:text-[16px]">
            Sit tellus lobortis sed senectus vivamus molestie. Condimentum
            volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
            aliquam amet tellus
          </p>
          <Button
            className="hidden sm:flex"
            title="Explore Menu"
            to="/commingSoon"
          />
        </div>
      </div>
      <div className="flex justify-center items-center w-[250px] h=[250px] my-4 sm:w-[700px] ">
        <img
          className="w-full h-full object-cover"
          src={homeImgSmScreen}
          alt="welcom"
        />
      </div>
      <Button className="sm:hidden" title="Explore Menu" to="/commingSoon" />
    </section>
  );
};

export default HeaderHome;
