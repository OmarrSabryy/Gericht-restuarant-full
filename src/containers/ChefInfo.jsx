import React from "react";
import { team } from "../constants";
import { SubHeader } from "../components";
const ChefInfo = (props) => {
  const chef = team.find((chef) => chef.id === props.chefId);
  return (
    <section className="section_colomn bg-dimBlack min-h-screen font-cormorant text-white capitalize sm:flex-row">
      <div className="flex justify-center items-center w-[200px] h-[250px] border-[1px] border-golden sm:w-[500px] sm:h-[550px] sm:flex-1">
        <img
          className="w-full h-full object-cover"
          src={chef.chefImg}
          alt="chefImg"
        />
      </div>
      <div className=" flex flex-col justify-center items-start gap-4 sm:flex-1">
        <div className=" flex flex-col justify-center items-start gap-1">
          <SubHeader title={`${chef.chefTitle}`} />
          <h1 className="text-golden text-[30px] sm:text-[50px]">
            {chef.chefName}
          </h1>
        </div>
        <div className="flex flex-col justify-center items-start gap-1">
          <p className="text-[8px] text-grayLight normal-case font-poppins mb-2 sm:text-[12px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit.
            Auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
            sit. Nulla scelerisque scelerisque consectetur adipiscing elit.
          </p>
          <p className="text-[10px] normal-case sm:text-[14px] ">
            Graduated from Culinary Institute of New Jersey, USA.
          </p>
          <p className="text-[10px] normal-case sm:text-[14px]">
            Worked as a junior chef at ruso’s Italiano.
          </p>
          <p className="text-[10px] normal-case sm:text-[14px]">
            Contributed 20+ new recipes on International platform.
          </p>
          <p className="text-[10px] normal-case sm:text-[14px]">
            Trained under renowned Chef Gusteau Marcellini
          </p>
        </div>
        <h1 className="font-great text-[30px]">{chef.chefName}</h1>
      </div>
    </section>
  );
};

export default ChefInfo;
