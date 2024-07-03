import React from "react";
import ArrowSvg from "../utils/ArrowSvg";

const CommonBtn = ({ btnName, iconPresent }) => {
  return (
    <button className="bg-[#00732F] text-white py-2 px-8 rounded-md shadow-lg transform transition-transform duration-200 ease-in-out active:scale-95 w-auto font-medium flex items-center font-poppins">
      {btnName}
      {iconPresent && <ArrowSvg />}
    </button>
  );
};

export default CommonBtn;
