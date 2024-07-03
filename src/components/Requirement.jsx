// import React, { useState } from "react";
// import postRequirementImg from "../images/post_requirement.png";
// import { FaCheck } from "react-icons/fa";
// import { Buyer } from "../utils/constant";

// const Requirement = () => {
//   const [buyer, setBuyer] = useState(true);

//   const onClickBuyer = () => {
//     setBuyer(true);
//   };

//   const onClickSupplier = () => {
//     setBuyer(false);
//   };

//   return (
//     <div className="w-full bg-white flex justify-center py-8">
//       <div className="w-11/12 bg-[#072F57] h-[623px] flex justify-between items-center flex-row p-8">
//         <div className="relative">
//           <img
//             src={postRequirementImg}
//             alt="post"
//             className="w-[640px] h-[350px]"
//           />
//         </div>
//         <div className="flex flex-col ml-8">
//           <div className="flex mb-4">
//             <span
//               onClick={onClickBuyer}
//               className={`cursor-pointer ${
//                 buyer
//                   ? "text-[#e07a5f] border-b-2 border-[#e07a5f] w-[100px] pr-4"
//                   : "text-white"
//               } text-xl font-semibold mr-4 pb-2 `}
//             >
//               Buyer
//             </span>
//             <span
//               onClick={onClickSupplier}
//               className={`cursor-pointer ${
//                 !buyer
//                   ? "text-[#e07a5f] border-b-4 border-[#e07a5f]"
//                   : "text-white"
//               } text-xl font-semibold pb-2`}
//             >
//               Supplier
//             </span>
//           </div>
//           <ul className="text-white text-lg list-none space-y-2">
//             <li className="flex items-center">
//               <span className="inline-block w-4 h-4 bg-green-500 rounded-full mr-[2px]">
//                 <FaCheck size={13} className="mt-[2px] mr-[2px]" />
//               </span>
//               Post your requirements.
//             </li>
//             {/*
//               {Buyer.map((buyer, index) => (
//                 <>
//                 <li   key={index} className="flex items-center">
//                   <span

//                     className="inline-block w-4 h-4 bg-green-500 rounded-full mr-[2px]"
//                   >
//                     <FaCheck size={13} className="mt-[2px] mr-[2px]" />
//                   </span>
//                   {buyer}
//                         </li>
//                 </>
//               ))}
//        */}

//             <li className="flex items-center">
//               <span className="inline-block w-4 h-4 bg-green-500 rounded-full">
//                 <FaCheck size={15} className="" />
//               </span>
//               Sit back for multiple suppliers to contact you.
//             </li>

//             {/* //// */}
//             <li className="flex relative items-center">
//               <span className=" w-4 h-4 bg-green-500 rounded-full">
//                 <FaCheck size={15} />
//               </span>
//               Choose among the suppliers based on the ratings and reviews.
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Requirement;

import React, { useState } from "react";
import postRequirementImg from "../images/post_requirement.png";
import { FaCheck } from "react-icons/fa";
import { Buyer, Supplier } from "../utils/constant"; // Assuming Buyer and Supplier arrays are defined

const Requirement = () => {
  const [isBuyer, setIsBuyer] = useState(true);

  const onClickBuyer = () => {
    setIsBuyer(true);
  };

  const onClickSupplier = () => {
    setIsBuyer(false);
  };

  // Determine which array to use based on isBuyer state
  const itemsToShow = isBuyer ? Buyer : Supplier;

  return (
    <>
      <div className="w-full bg-white flex justify-center py-8">
        <div className="w-11/12 bg-[#072F57] h-[623px] flex justify-center items-center flex-row p-8 overflow-hidden">
          <div className="relative">
            <img
              src={postRequirementImg}
              alt="post"
              className="w-[640px] h-[350px] relative"
            />
          </div>
          <div className="flex flex-col ml-[200px]">
            <div className="flex mb-4">
              <span
                onClick={onClickBuyer}
                className={`cursor-pointer ${
                  isBuyer
                    ? "text-[#e07a5f] border-b-2 border-[#e07a5f] w-[100px]"
                    : "text-white"
                } text-xl font-semibold pb-2 mr-4 w-[100px] text-center`} // Added fixed width and center alignment
              >
                Buyer
              </span>
              <span
                onClick={onClickSupplier}
                className={`cursor-pointer ${
                  !isBuyer
                    ? "text-[#e07a5f] border-b-2 border-[#e07a5f] w-[100px]"
                    : "text-white"
                } text-xl font-semibold pb-2 w-[100px] text-center`} // Added fixed width and center alignment
              >
                Supplier
              </span>
            </div>
            <ul className="text-white text-lg list-none space-y-2">
              {itemsToShow.map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="inline-block w-4 h-4 bg-green-500 rounded-full mr-2">
                    <FaCheck size={15} className="text-white" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* // */}
      <div className="w-full bg-[#E8FBFF] h-[254px] flex justify-center items-center mt-[100px] mb-[100px]">
        <div className="flex justify-between w-11/12 max-w-4xl">
          {" "}
          {/* Adjusted width and alignment */}
          <div>
            <span className="font-[600] font-poppins text-[38px]">
              Let Suppliers{" "}
              <span className="border-b-4 border-[#EB7150]">Find You</span>
            </span>
          </div>
          <div className="ml-4">
            {" "}
            {/* Added margin to the left of the button */}
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
