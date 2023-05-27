import React from "react";

const MenuItem = (props) => {
  const ingredientsList = props.ingredients?.map((item, index) => (
    <>
      <li key={index + "i" + item}>{item}</li>
      {index !== props.ingredients.length - 1 && (
        <li
          key={index + "bar" + item}
          className="w-[0.1px] h-[12px] bg-crimson"
        ></li>
      )}
    </>
  ));
  return (
    <div className="flex flex-col w-full justify-center items-start gap-1">
      <div className="flex justify-center items-center w-full gap-4">
        <h3 className="flex-1 text-golden text-[16px]"> {props.title} </h3>
        <div className="h-[0.1px] w-[20px] bg-golden flex-[0.4]"></div>
        <p className="flex-[0.1] text-[16px]"> {props.price} </p>
      </div>
      <ul className="flex justify-start items-center gap-1 text-[12px] font-poppins text-grayLight flex-wrap">
        {ingredientsList}
      </ul>
    </div>
  );
};

export default MenuItem;
