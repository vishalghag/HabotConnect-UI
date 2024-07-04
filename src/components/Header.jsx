import React, { useState } from "react";
import { Link } from "react-router-dom";
import HabotLogo from "../images/habot-logo.jpg";
import ChevronDown from "../utils/ChevronDown";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="w-full h-24 top-0 left-0 flex items-center justify-between px-6">
      <div id="logo" className="w-auto">
        <Link to="/">
          <img
            src={HabotLogo}
            alt="Habot_logo"
            className="block md:w-[181px] md:h-[120px] sm:w-[90px] sm:h-[60px]"
          />
        </Link>
      </div>
      <div className="hidden sm:flex items-center space-x-4">
        <Link
          to="/find-supplier"
          className="text-lg text-gray-500 font-poppins"
        >
          Find Supplier
        </Link>
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="text-lg text-gray-500 flex items-center font-poppins"
          >
            Find Service Tags
            <ChevronDown dropdownOpen={dropdownOpen} />
          </button>
          {dropdownOpen && (
            <div className="absolute mt-2 w-48 bg-white border rounded shadow-lg z-40">
              <Link
                to="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-200 font-poppins"
                onClick={() => setDropdownOpen(false)}
              >
                Service 1
              </Link>
              <Link
                to="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-200 font-poppins"
                onClick={() => setDropdownOpen(false)}
              >
                Service 2
              </Link>
              <Link
                to="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-200 font-poppins"
                onClick={() => setDropdownOpen(false)}
              >
                Service 3
              </Link>
            </div>
          )}
        </div>
        <button className="block bg-white text-green-700 py-2 px-8 rounded-md shadow-lg transform transition-transform duration-200 ease-in-out active:scale-95 w-auto font-medium m-2 border-[2px] border-green-700 font-poppins">
          Login / Sign Up
        </button>
      </div>
      <div className="sm:hidden flex items-center">
        <button
          onClick={toggleMobileMenu}
          className="text-gray-500 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                mobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16m-7 6h7"
              }
            />
          </svg>
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="absolute top-24 left-0 w-full bg-white shadow-lg z-40 sm:hidden">
          <Link
            to="/find-supplier"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-200 font-poppins"
            onClick={() => setMobileMenuOpen(false)}
          >
            Find Supplier
          </Link>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200 font-poppins"
            >
              Find Service Tags
              <ChevronDown dropdownOpen={dropdownOpen} />
            </button>
            {dropdownOpen && (
              <div className="mt-2 w-full bg-white border rounded shadow-lg z-40">
                <Link
                  to="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200 font-poppins"
                  onClick={() => {
                    setDropdownOpen(false);
                    setMobileMenuOpen(false);
                  }}
                >
                  Service 1
                </Link>
                <Link
                  to="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200 font-poppins"
                  onClick={() => {
                    setDropdownOpen(false);
                    setMobileMenuOpen(false);
                  }}
                >
                  Service 2
                </Link>
                <Link
                  to="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200 font-poppins"
                  onClick={() => {
                    setDropdownOpen(false);
                    setMobileMenuOpen(false);
                  }}
                >
                  Service 3
                </Link>
              </div>
            )}
          </div>
          <Link
            to="/login"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-200 font-poppins"
            onClick={() => setMobileMenuOpen(false)}
          >
            Login / Sign Up
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
