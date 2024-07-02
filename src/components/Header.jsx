import React, { useState } from "react";
import { Link } from "react-router-dom";
import HabotLogo from "../habot-logo.jpg";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="w-full h-24 top-0 left-0 flex items-center justify-between px-6">
      <div id="logo" className="w-auto">
        <Link to="/">
          <img
            src={HabotLogo}
            alt="Habot_logo"
            className="block w-[181px] h-[120px]"
          />
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <Link to="/find-supplier" className="text-lg text-gray-500">
          Find Supplier
        </Link>
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="text-lg text-gray-500 flex items-center"
          >
            Find Service Tags
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className={`ml-2 h-4 w-4 transition-transform ${
                dropdownOpen ? "rotate-180" : "rotate-0"
              }`}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
          {dropdownOpen && (
            <div className="absolute mt-2 w-48 bg-white border rounded shadow-lg z-40">
              <Link
                to="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                onClick={() => setDropdownOpen(false)}
              >
                Service 1
              </Link>
              <Link
                to="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                onClick={() => setDropdownOpen(false)}
              >
                Service 2
              </Link>
              <Link
                to="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                onClick={() => setDropdownOpen(false)}
              >
                Service 3
              </Link>
            </div>
          )}
        </div>
        <button className="block bg-white text-green-700 py-2 px-8 rounded-md shadow-lg transform transition-transform duration-200 ease-in-out active:scale-95 w-auto font-medium m-2 border-[2px] border-green-700">
          Login / Sign Up
        </button>
      </div>
    </div>
  );
};

export default Header;
