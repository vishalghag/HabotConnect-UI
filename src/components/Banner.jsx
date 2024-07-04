import React from "react";
import { BANNER_IMG, gradientStyle } from "../utils/constant.js";
import CommonBtn from "../common/CommonBtn.jsx";
import MessageSvg from "../utils/MessageSvg.jsx";
import LocationSvg from "../utils/LocationSvg.jsx";
import CommonInput from "../common/CommonInput.jsx";

const Banner = () => {
  return (
    <div className="w-full h-[609px] relative">
      <div style={gradientStyle} className="absolute inset-0"></div>
      <img
        src={BANNER_IMG}
        alt="banner"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center flex-col text-center px-4">
        <span className="text-white text-[35px] sm:text-[55px] font-bold z-20 font-poppins">
          Are You a Supplier?
        </span>
        <span className="text-white text-[35px] sm:text-[55px] font-[400] z-20 font-poppins mt-2 sm:mt-0">
          Explore Matching Opportunities.
        </span>
        <div className="flex flex-col sm:flex-row mt-8 space-y-4 sm:space-y-0 sm:space-x-4 items-center">
          <div className="relative w-full sm:w-[400px]">
            <MessageSvg />
            <CommonInput
              inputType={"text"}
              inputPlaceholder={"Search your required service here"}
            />
          </div>
          <div className="relative w-full sm:w-[400px]">
            <LocationSvg />
            <CommonInput
              inputType={"text"}
              inputPlaceholder={"Search your desired location here"}
            />
          </div>
          <CommonBtn btnName={"Search"} />
        </div>
        <span className="text-white text-[16px] sm:text-[18px] leading-4 font-bold z-20 mt-6 cursor-pointer font-poppins">
          Are you a buyer?{"  "}
          <span className="font-[400] ml-1 font-poppins">
            <u>Click here if you are looking to post a requirement</u>
          </span>
        </span>
      </div>
    </div>
  );
};

export default Banner;
