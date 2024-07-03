import React from "react";
import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#072F57] text-white py-11 mt-[100px]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="border-t-[1px] border-b-[1px] border-white py-4 flex justify-between items-center">
          <div className="flex flex-col items-start">
            <div className="text-3xl font-bold">HABOT</div>
            <p className="mt-1 font-[300]">© R Singhania</p>
          </div>
          <div className="flex space-x-16">
            <div className="space-y-2">
              <h5 className="font-semibold">Company</h5>
              <ul>
                <li>
                  <Link to="#" className="text-gray-300 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-300 hover:text-white">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h5 className="font-semibold">Terms</h5>
              <ul>
                <li>
                  <Link to="#" className="text-gray-300 hover:text-white">
                    Data privacy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-300 hover:text-white">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-300 hover:text-white">
                    Accessibility
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h5 className="font-semibold">Related</h5>
              <ul>
                <li>
                  <Link to="#" className="text-gray-300 hover:text-white">
                    Find Buyer
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-300 hover:text-white">
                    Feedback
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex space-x-4">
            <Link to="#" className="text-gray-300 hover:text-white">
              <FaLinkedin size={20} />
            </Link>
            <Link to="#" className="text-gray-300 hover:text-white">
              <FaTwitter size={20} />
            </Link>
            <Link to="#" className="text-gray-300 hover:text-white">
              <FaFacebookF size={20} />
            </Link>
            <Link to="#" className="text-gray-300 hover:text-white">
              <FaInstagram size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
