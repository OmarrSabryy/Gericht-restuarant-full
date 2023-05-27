import React from "react";
import { categories } from "../constants";
const categoriesList = categories.map((category) => (
  <div
    key={category.id}
    className="w-full flex justify-between items-center gap-2 text-grayLight text-[8px] font-poppins"
  >
    <p className="flex-[0.8] ">{category.title}</p>{" "}
    <div className="flex-1 h-[0.5px] w-[30px] bg-grayLight"></div>
    <p className="flex-[0.2] ">{`(${category.value})`}</p>
  </div>
));
const Categories = () => {
  return (
    <div className="flex flex-col justify-center items-start gap-2 p-4 bg-darkGrey font-cormorant capitalize w-[200px]">
      <h1 className="text-[20px] text-golden">all categories</h1>
      <div className="w-full flex flex-col justify-center items-start gap-2">
        {categoriesList}
      </div>
    </div>
  );
};

export default Categories;
