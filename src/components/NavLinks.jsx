import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md";
const NavLinks = (props) => {
  const [dropdown, setDropdown] = useState(false);
  const closeDropdown = () => {
    props.onClick();
  };
  return (
    <>
      <li>
        <Link to="/" className="flex" onClick={closeDropdown}>
          Home
        </Link>
      </li>
      <li className="flex justify-start items-center cursor-pointer">
        <Link to="/commingSoon" onClick={closeDropdown}>
          Menu
        </Link>
      </li>
      <li>
        <Link to="/blogs" className="flex" onClick={closeDropdown}>
          Blog
        </Link>
      </li>
      <li>
        <Link to="/contactUs" className="flex" onClick={closeDropdown}>
          Contact Us
        </Link>
      </li>
      <li
        className="flex justify-start items-center cursor-pointer relative"
        onClick={() => setDropdown((prev) => !prev)}
      >
        More <MdArrowDropDown />
        {dropdown && (
          <ul className="text-[14px] flex flex-col absolute bg-dimBlack border-stone-800 border-[1px] w-max left-[4rem] top-[0.5rem] p-2 rounded-[0.25rem] shadow-md z-20 fade-in-fwd">
            <Link to="/ourServices" onClick={closeDropdown}>
              Our Services
            </Link>
            <Link to="/aboutUs" onClick={closeDropdown}>
              About Us
            </Link>
            <Link to="/ourTeam" onClick={closeDropdown}>
              Team
            </Link>
          </ul>
        )}
      </li>
      <li className="flex ss:hidden">
        <Link to="/commingSoon" className="flex" onClick={closeDropdown}>
          Log in / Register
        </Link>
      </li>
      <li className="flex ss:hidden">
        <Link to="/commingSoon" className="flex" onClick={closeDropdown}>
          Book Table
        </Link>
      </li>
    </>
  );
};

export default NavLinks;
