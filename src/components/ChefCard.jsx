import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
const ChefCard = (props) => {
  return (
    <div className="flex flex-col justify-center items-center capitalize font-cormorant gap-2">
      <div className="group flex justify-center items-center w-[180px] h-[250px] border-[1px] border-golden  relative ">
        <img
          className="w-full h-full object-cover group-hover:opacity-50 duration-300 ease-in-out"
          src={props.chefImg}
          alt="chefImg"
        />
        <div className="opacity-0 self-end flex group-hover:opacity-100 duration-300 ease-in-out flex-col justify-center items-center gap-2 absolute bottom-6">
          <div className="flex justify-center items-center gap-3">
            <FaFacebookF
              size={13}
              className="hover:text-golden text-white"
              cursor="pointer"
            />
            <FaTwitter
              size={13}
              cursor="pointer"
              className="hover:text-golden text-white"
            />
            <FaInstagram
              size={13}
              cursor="pointer"
              className="hover:text-golden text-white"
            />
          </div>
          <div className="text-golden text-[10px] flex justify-center items-center gap-2 font-semibold">
            <div className="w-[10px] bg-golden h-[1px]"></div>
            <Link to={`/ourTeam/${props.chefId}`}>read more</Link>
          </div>
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center">
        <h1
          className={`text-${
            props.chefTitle === "head chef" ? "golden" : "white"
          } text-[20px]`}
        >
          {props.chefName}
        </h1>
        <p className="text-white font-poppins text-[10px]">{props.chefTitle}</p>
      </div>
    </div>
  );
};

export default ChefCard;
