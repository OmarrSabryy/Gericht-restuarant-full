import React from "react";
import { Button, MenuItem } from "../components";
import { spoon, specialMenu } from "../assets";
import { wineAndBeer, cocktails } from "../constants";
const Wine = () =>
  wineAndBeer.map((drink) => (
    <MenuItem
      key={drink.id}
      title={drink.title}
      price={drink.price}
      ingredients={drink.ingredients}
    />
  ));
const Cocktails = () =>
  cocktails.map((cocktail) => (
    <MenuItem
      key={cocktail.id}
      title={cocktail.title}
      price={cocktail.price}
      ingredients={cocktail.ingredients}
    />
  ));
const SpecialMenu = () => {
  return (
    <section className="section_colomn bg-dimBlack min-h-screen my-4 text-white font-cormorant capitalize ">
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="flex flex-col">
          <h3>Menu that fits you palatte</h3>
          <img className="self-center" src={spoon} alt="spoon" />
        </div>
        <h1 className="text-[30px] font-semibold text-golden ">
          Today’s Special
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center sm:flex-row sm:gap-4">
        <div className="flex flex-col justify-center items-start w-full gap-1">
          <h2 className="text-[20px] self-center">Wine & Beer</h2>
          <ul className="w-full flex flex-col justify-center items-start gap-2">
            <Wine />
          </ul>
        </div>
        <div>
          <img src={specialMenu} alt="specialMenu" />
        </div>
        <div className="flex flex-col justify-center items-start w-full gap-1">
          <h2 className="text-[20px] self-center">Cocktails</h2>
          <ul className="w-full flex flex-col justify-center items-start gap-2">
            <Cocktails />
          </ul>
        </div>
      </div>
      <Button title="View More" to="/commingSoon" />
    </section>
  );
};

export default SpecialMenu;
