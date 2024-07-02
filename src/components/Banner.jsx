// import React from "react";
// import { BANNER_IMG, gradientStyle } from "../utils/constant.js";

// const Banner = () => {
//   return (
//     <div className="w-full h-[609px] relative">
//       <div style={gradientStyle} className="absolute inset-0"></div>
//       <img
//         src={BANNER_IMG}
//         alt="banner"
//         className="h-full w-full object-cover"
//       />
//       <div className="absolute inset-0 flex items-center justify-center flex-col">
//         {/* <div className="flex flex-col"> */}
//         <span className="text-white text-[55px] font-bold z-20">
//           Are You a Supplier?
//         </span>
//         <br />
//         <span className="text-white text-4xl text-[55px] font-[400] z-20">
//           Explore Matching Opportunities.
//         </span>
//         {/* </div> */}
//         <div className=" flex-row mt-16 float-start">
//           <input
//             type="text"
//             placeholder="Search your required service here"
//             className=" rounded-md w-[350px] h-[56px] border border-black"
//           />
//           <input
//             type="text"
//             placeholder="Search your required service here"
//             className=" rounded-md w-[350px] h-[56px] border border-black"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;

import React from "react";
import { BANNER_IMG, gradientStyle } from "../utils/constant.js";

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
        <span className="text-white text-[55px] font-bold z-20">
          Are You a Supplier?
        </span>
        <span className="text-white text-[55px] font-[400] z-20">
          Explore Matching Opportunities.
        </span>
        <div className="flex flex-col sm:flex-row mt-8 space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="relative w-[400px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            <input
              type="text"
              placeholder="Search your required service here"
              className="rounded-md w-full h-[56px] border border-black pl-10 pr-5"
            />
          </div>
          <div className="relative w-[400px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search your required service here"
              className="rounded-md w-full h-[56px] border border-black pl-10 pr-5 font-medium"
            />
          </div>
          <button className="ml-[100px] block bg-green-800 text-white py-2 px-8 rounded-md shadow-lg transform transition-transform duration-200 ease-in-out active:scale-95 w-auto font-medium">
            Search
          </button>
        </div>
        <span className="text-white text-[18px] leading-4 font-bold z-20 mt-4 cursor-pointer">
          Are you a buyer?{"  "}
          <span className=" font-[400] ml-1">
            Click here if you are looking to post a requirements
          </span>
        </span>
      </div>
    </div>
  );
};

export default Banner;
