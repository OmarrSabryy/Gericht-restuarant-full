import React from "react";
import { contact } from "../constants";
const tele = contact.tel.map((tel, index) => <p key={"t" + index}>{tel}</p>);
const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 font-poppins">
      <h2 className="text-[20px] font-cormorant capitalize text-crimson">
        contact us
      </h2>
      <div className="flex flex-col justify-center items-center gap-2 text-[10px] text-grayLight">
        <p>{contact.address}</p>
        {tele}
      </div>
    </div>
  );
};

export default Contact;
