import React from "react";
import {
  FaUserPlus,
  FaClipboardList,
  FaSearch,
  FaFileSignature,
  FaHandsHelping,
} from "react-icons/fa";

const WorkSection = () => {
  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold">How it works?</h2>
        <p className="text-lg text-gray-600 mt-2 max-w-3xl mx-auto">
          Buyers post their needs and review top suppliers, while suppliers
          complete profiles, connect with potential buyers, and build successful
          business relationships, sharing valuable feedback.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center bg-[#E8FBFF] p-6 rounded-lg  border-gray-300">
          <FaUserPlus size={48} className="text-black mb-4" />
          <p className="font-semibold">Select Your Role and Sign Up</p>
        </div>
        <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg  border-gray-300">
          <FaClipboardList size={48} className="text-black mb-4" />
          <p className="font-semibold">Buyers Post Your Requirements</p>
        </div>
        <div className="flex flex-col items-center text-center bg-[#E8FBFF] p-6 rounded-lg  border-gray-300 ">
          <FaSearch size={48} className="text-black mb-4" />
          <p className="font-semibold">
            Review, Select, and Contact the Best Suppliers
          </p>
        </div>
        <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg  border-gray-300 ">
          <FaFileSignature size={48} className="text-black mb-4" />
          <p className="font-semibold">
            Suppliers Complete your profile and get notified for opportunities
          </p>
        </div>
        <div className="flex flex-col items-center text-center bg-[#E8FBFF] p-6 rounded-lg  border-gray-300 ">
          <FaClipboardList size={48} className="text-black mb-4" />
          <p className="font-semibold">
            Contact to Buyers and Share your Quote for the service
          </p>
        </div>
        <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg ">
          <FaHandsHelping size={48} className="text-black mb-4" />
          <p className="font-semibold">
            Both the Parties can Connect and Make Business Leave a Feedback
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
