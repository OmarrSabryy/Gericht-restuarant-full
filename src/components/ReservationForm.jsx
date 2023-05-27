import React from "react";
import { Button } from "../components";
const ReservationForm = () => {
  return (
    <form
      className="flex flex-col justify-center items-center
    gap-2 px-4"
    >
      <div className="flex flex-col gap-4 font-poppins sm:flex-row">
        <select
          className="bg-dimBlack text-grayLight text-[12px] p-2  border-stone-800 border-[1px] outline-none w-[200px] rounded-sm flex "
          name="persons"
          id="persons"
        >
          <option value="1">1 Person</option>
          <option value="2">2 Persons</option>
          <option value="3">3 Persons</option>
          <option value="4">4 Persons</option>
        </select>
        <input
          className="w-[200px] bg-dimBlack text-grayLight border-stone-800 border-[1px] p-2 text-[12px] active:text-dimBlack "
          type="date"
        />
        <input
          className="w-[200px] bg-dimBlack text-grayLight border-stone-800 border-[1px] p-2 text-[12px]"
          type="time"
        />
      </div>
      <Button title="book now" />
    </form>
  );
};

export default ReservationForm;
