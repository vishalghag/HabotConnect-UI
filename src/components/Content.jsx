import React from "react";
import CommonBtn from "../common/CommonBtn";
import { location } from "../utils/constant";
import Requirement from "./Requirement";
import WorkSection from "./WorkSection";

const Content = () => {
  return (
    <>
      <div className="min-h-auto flex justify-center items-center bg-white m-[100px]">
        <div className="w-full flex justify-between items-center flex-row">
          <div className="flex flex-col">
            <span className="font-bold text-[38px] text-black font-poppins mb-4">
              Ready to dive into HABOT?
            </span>
            <p className="text-[18px] font-[300] w-[620px] font-poppins mb-6">
              Signing up with HABOT opens the door to a world of new
              opportunities and potential for business growth. Gain access to a
              vibrant community of like-minded individuals, unlock valuable
              resources, and take the first step towards realizing your
              entrepreneurial dreams.
            </p>
            <div className="w-[620px]">
              <CommonBtn btnName={"Sign up Today !"} iconPresent={true} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 ml-8">
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
