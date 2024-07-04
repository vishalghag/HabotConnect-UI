import React, { useState } from "react";
import postRequirementImg from "../images/post_requirement.png";
import { FaCheck, FaYoutube } from "react-icons/fa";
import { Buyer, Supplier } from "../utils/constant";

const Requirement = () => {
  const [isBuyer, setIsBuyer] = useState(true);

  const onClickBuyer = () => {
    setIsBuyer(true);
  };

  const onClickSupplier = () => {
    setIsBuyer(false);
  };

  const itemsToShow = isBuyer ? Buyer : Supplier;

  return (
    <>
      <div className="w-full bg-white flex justify-center py-8">
        <div className="w-11/12 bg-[#072F57] flex flex-col lg:flex-row justify-center items-center p-8 overflow-hidden relative">
          <div className="relative mb-8 lg:mb-0 w-full lg:w-auto">
            <img
              src={postRequirementImg}
              alt="post"
              className="w-full lg:w-[640px] h-[350px] object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <FaYoutube size={64} className="text-red-600" />
            </div>
          </div>
          <div className="flex flex-col lg:ml-[200px] text-center lg:text-left">
            <div className="flex justify-center lg:justify-start mb-4">
              <span
                onClick={onClickBuyer}
                className={`cursor-pointer ${
                  isBuyer
                    ? "text-[#e07a5f] border-b-2 border-[#e07a5f]"
                    : "text-white"
                } text-xl font-semibold pb-2 mr-4 w-[100px] text-center`}
              >
                Buyer
              </span>
              <span
                onClick={onClickSupplier}
                className={`cursor-pointer ${
                  !isBuyer
                    ? "text-[#e07a5f] border-b-2 border-[#e07a5f]"
                    : "text-white"
                } text-xl font-semibold pb-2 w-[100px] text-center`}
              >
                Supplier
              </span>
            </div>
            <ul className="text-white text-lg list-none space-y-2">
              {itemsToShow.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-col sm:flex-row items-center justify-center lg:justify-start"
                >
                  <span className="inline-block w-4 h-4 bg-green-500 rounded-full mr-2 flex-shrink-0">
                    <FaCheck
                      size={11}
                      className="text-white mt-[2px] ml-[2px]"
                    />
                  </span>
                  <span className="text-center sm:text-left">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#E8FBFF] flex justify-center items-center mt-[100px] mb-[100px] py-8">
        <div className="flex flex-col lg:flex-row justify-between w-11/12 max-w-4xl items-center text-center lg:text-left">
          <div>
            <span className="font-[600] font-poppins text-[28px] sm:text-[38px]">
              Let Suppliers{" "}
              <span className="border-b-4 border-[#EB7150]">Find You</span>
            </span>
          </div>
          <div className="mt-4 lg:mt-0 lg:ml-4">
            <button className="bg-[#EB7150] text-white py-2 px-8 rounded-md shadow-lg transform transition-transform duration-200 ease-in-out active:scale-95 w-auto font-medium flex items-center font-poppins h-[54px]">
              Get Verified
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Requirement;
