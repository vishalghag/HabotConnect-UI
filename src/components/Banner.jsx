import React from "react";
import { BANNER_IMG, gradientStyle } from "../utils/constant.js";
import CommonBtn from "../common/CommonBtn.jsx";
import MessageSvg from "../utils/MessageSvg.jsx";
import LocationSvg from "../utils/LocationSvg.jsx";

const Banner = () => {
  return (
    <div className="w-full h-[609px] relative">
      <div style={gradientStyle} className="absolute inset-0"></div>
      <img
        src={BANNER_IMG}
        alt="banner"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center flex-col">
        <span className="text-white text-[55px] font-bold z-20 font-poppins">
          Are You a Supplier?
        </span>
        <span className="text-white text-[55px] font-[400] z-20 font-poppins">
          Explore Matching Opportunities.
        </span>
        <div className="flex flex-col sm:flex-row mt-8 space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="relative w-[400px]">
            <MessageSvg />
            <input
              type="text"
              placeholder="Search your required service here"
              className="rounded-md w-full h-[56px] border border-black pl-10 pr-5 font-poppins"
            />
          </div>
          <div className="relative w-[400px]">
            <LocationSvg />
            <input
              type="text"
              placeholder="Search your required service here"
              className="rounded-md w-full h-[56px] border border-black pl-10 pr-5 font-medium font-poppins"
            />
          </div>
          <CommonBtn btnName={"Search"} />
        </div>
        <span className="text-white text-[18px] leading-4 font-bold z-20 mt-6 cursor-pointer font-poppins">
          Are you a buyer?{"  "}
          <span className=" font-[400] ml-1 font-poppins">
            <u>Click here if you are looking to post a requirements</u>
          </span>
        </span>
      </div>
    </div>
  );
};

export default Banner;
