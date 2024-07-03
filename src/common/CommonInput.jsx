import React from "react";

const CommonInput = ({ inputType, inputPlaceholder }) => {
  return (
    <input
      type={inputType}
      placeholder={inputPlaceholder}
      className="rounded-md w-full h-[56px] border border-black pl-10 pr-5 font-poppins"
    />
  );
};

export default CommonInput;
