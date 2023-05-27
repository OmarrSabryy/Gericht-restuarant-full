import React from "react";
import { spoon } from "../assets";
import { ReservationForm } from "../components";
const Reservation = () => {
  return (
    <section className="flex justify-center items-center py-16 px-4 w-full">
      <div className="bg-dimBlack flex flex-col justify-center items-center text-white font-cormorant capitalize border-stone-800 border-[1px] py-4">
        <div className="flex flex-col ">
          <p>reservations</p>
          <img className="self-center" src={spoon} alt="spoon" />
        </div>
        <h1 className="text-golden text-[30px]">book a table</h1>
        <ReservationForm />
      </div>
    </section>
  );
};

export default Reservation;
