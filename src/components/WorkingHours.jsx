import React from "react";
import { workingHours } from "../constants";
const workingHoursList = workingHours.map((item) => (
  <div
    key={item.id}
    className="flex flex-col justify-center items-center gap-1"
  >
    <p>{item.period}</p>
    <p>{item.hours}</p>
  </div>
));
const WorkingHours = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 text-grayLight font-poppins">
      <h2 className="text-crimson text-[20px] font-cormorant capitalize">
        working hours
      </h2>
      <div className="flex flex-col justify-center items-center gap-2 text-[10px]">
        {workingHoursList}
      </div>
    </div>
  );
};

export default WorkingHours;
