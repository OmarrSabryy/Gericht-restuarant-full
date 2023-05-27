import React from "react";
import { Search, Categories, LatestPost, Tags, Share } from "../components";
import { TbArrowBarToLeft, TbArrowBarToRight } from "react-icons/tb";
const SideBar = (props) => {
  return (
    <div
      className={`${props.className} flex flex-col justify-center items-center gap-4 right-[-200px] hover:right-0 duration-500 ease-in-out hover:bg-dimBlack hover:bg-opacity-90`}
    >
      <Search />
      <Categories />
      <LatestPost />
      <Tags />
      <Share />
      <div className="z-[-1] flex absolute justify-start items-center w-[5rem] h-[5rem] rounded-full bg-darkGrey p-1 right-[140px] bottom-[50%] pointer-events-auto sm:hidden">
        <TbArrowBarToLeft
          color="#fff"
          className="group opacity-60 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default SideBar;
