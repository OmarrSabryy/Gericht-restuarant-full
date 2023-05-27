import React, { useState } from "react";
import { appLogo } from "../assets";
import { NavLinks } from "../components";
import { MdMenu, MdRestaurantMenu } from "react-icons/md";
import { Backdrop } from "../ui";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const hideDropMenuHandler = () => {
    if (toggleMenu) setToggleMenu(false);
  };
  return (
    <>
      {toggleMenu && (
        <Backdrop className="slide-bottom">
          <ul className="font-cormorant text-[20px] text-golden flex flex-col justify-center items-start">
            <NavLinks onClick={hideDropMenuHandler} />
          </ul>
        </Backdrop>
      )}
      <div className="flex w-full justify-between items-center px-4 py-2 bg-dimBlack">
        <div className="flex justify-center items-center w-24 h-12">
          <img className="object-cover" src={appLogo} alt="gericht" />
        </div>
        <div className="hidden sm:flex text-white font-poppins">
          <ul className="flex justify-center items-center gap-2">
            <NavLinks />
          </ul>
        </div>
        <div className="flex justify-center items-center gap-4">
          <div className="hidden ss:flex justify-center items-center gap-2 text-white">
            <Link>Log in / Register</Link>
            <div></div>
            <Link>Book Table</Link>
          </div>
          {/* drop down menu */}
          <div className="flex justify-center items-center z-20 sm:hidden">
            {toggleMenu ? (
              <MdRestaurantMenu
                color="#dcca87"
                cursor="pointer"
                size={22}
                onClick={() => setToggleMenu((prev) => !prev)}
              />
            ) : (
              <MdMenu
                color="#fff"
                cursor="pointer"
                size={22}
                onClick={() => setToggleMenu((prev) => !prev)}
              />
            )}
          </div>
          {/* navLinks */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
