import React from "react";
import CommonBtn from "../common/CommonBtn";
import { location } from "../utils/constant";
import Requirement from "./Requirement";
import WorkSection from "./WorkSection";

const Content = () => {
  return (
    <>
      <div className="min-h-auto flex justify-center items-center bg-white p-4 sm:p-[100px]">
        <div className="w-full flex flex-col lg:flex-row justify-between items-center">
          <div className="flex flex-col items-center lg:items-start lg:mb-0 mb-8">
            <span className="font-bold text-[28px] sm:text-[38px] text-black font-poppins mb-4 text-center lg:text-left">
              Ready to dive into HABOT?
            </span>
            <p className="text-[16px] sm:text-[18px] font-[300] w-full lg:w-[620px] font-poppins mb-6 text-center lg:text-left">
              Signing up with HABOT opens the door to a world of new
              opportunities and potential for business growth. Gain access to a
              vibrant community of like-minded individuals, unlock valuable
              resources, and take the first step towards realizing your
              entrepreneurial dreams.
            </p>
            <div className="w-full lg:w-[620px] flex justify-center lg:justify-start">
              <CommonBtn btnName={"Sign up Today !"} iconPresent={true} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 lg:ml-8 w-full lg:w-auto">
            {location.map((region, index) => (
              <button
                key={index}
                className="border border-orange-500 text-black py-2 px-4 rounded-md hover:bg-orange-500 hover:text-white transition-colors font-poppins"
              >
                {region}
              </button>
            ))}
          </div>
        </div>
      </div>
      <Requirement />
      <WorkSection />
    </>
  );
};

export default Content;
