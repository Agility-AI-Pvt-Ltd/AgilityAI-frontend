import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  return (
    <footer>
      <div className="bg-gray-800 py-4 text-[#F5FCE1] mt-10">
        <div className="container px-4 mx-auto">
          <div className="-mx-4 flex flex-wrap justify-between">
            <div className="px-4 my-4 w-full sm:w-auto xl:w-1/5">
              <h2 className="text-2xl pb-4 mb-4 border-b-4 border-teal-400">
                Company
              </h2>
              <ul className="leading-8">
                {/* About Us with Toggle Dropdown */}
                <li>
                  <button
                    onClick={() => setShowAboutDropdown((prev) => !prev)}
                    className="hover:text-blue-400 focus:outline-none text-left w-full"
                  >
                    About Us
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      showAboutDropdown
                        ? "max-h-40 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <ul className="ml-4 mt-2 space-y-1">
                      <li>
                        <Link
                          to="/about/company"
                          className="block hover:text-blue-300"
                        >
                          About Company
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/about/founders"
                          className="block hover:text-blue-300"
                        >
                          About Founders
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/about/advisory-board"
                          className="block hover:text-blue-300"
                        >
                          Advisory Board
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Other Links */}
                <li>
                  <Link to="/contact" className="hover:text-blue-400">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="hover:text-blue-400">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/termsofservice" className="hover:text-blue-400">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy" className="hover:text-blue-400">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div className="px-4 my-4 w-full sm:w-auto">
              <h2 className="text-2xl pb-4 mb-4 border-b-4 border-teal-400">
                Blog
              </h2>
              <ul className="leading-8">
                <li>
                  <Link to="/newsfeed" className="hover:text-blue-400">
                    AI Insights
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-blue-400">
                    Newsletter Signup
                  </Link>
                </li>
              </ul>
            </div>

            <div className="px-4 my-4 w-full sm:w-auto xl:w-1/5">
              <h2 className="text-2xl pb-3 mb-6 border-b-4 border-teal-400 text-white font-semibold">
                Connect With Us
              </h2>

              <div className="flex gap-4">
                {/* LinkedIn */}
                <Link
                  to="https://www.linkedin.com/company/agility-ai-pvt-ltd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 w-12 border border-white rounded-full flex items-center justify-center hover:bg-blue-100 hover:text-blue-700 hover:scale-110 transition duration-300"
                >
                  <svg
                    className="w-5 h-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.6 0 53.9S24.09-.3 53.79-.3c29.7 0 53.8 24.6 53.8 54.2s-24.1 53.3-53.8 53.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.4-48.4-79.4-48.4 0-55.9 37.9-55.9 77.1V448h-92.8V148.9h89v40.8h1.3c12.4-23.4 42.7-48.4 87.9-48.4 94 0 111.2 61.9 111.2 142.3V448z" />
                  </svg>
                </Link>

                {/* Instagram */}
                <Link
                  to="https://www.instagram.com/agilityy.ai?igsh=MXAxZnRuZG9kZXE0eQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 w-12 border border-white rounded-full flex items-center justify-center hover:bg-pink-100 hover:text-pink-600 hover:scale-110 transition duration-300"
                >
                  <svg
                    className="w-5 h-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 186.6c-39.6 0-71.8-32.2-71.8-71.8s32.2-71.8 71.8-71.8 71.8 32.2 71.8 71.8-32.1 71.8-71.8 71.8zm146.4-194.3c0 14-11.4 25.5-25.5 25.5S319.5 147.3 319.5 133s11.4-25.5 25.5-25.5 25.5 11.4 25.5 25.5zM398.8 82.1c-14.7-14.7-34.4-22.8-55.3-22.8H104.5c-20.9 0-40.6 8.1-55.3 22.8S26.4 116.5 26.4 137.4v239.2c0 20.9 8.1 40.6 22.8 55.3s34.4 22.8 55.3 22.8h239.2c20.9 0 40.6-8.1 55.3-22.8s22.8-34.4 22.8-55.3V137.4c0-20.9-8.1-40.6-22.8-55.3zM224.1 338c-45.4 0-82.1-36.8-82.1-82.1s36.7-82.1 82.1-82.1 82.1 36.7 82.1 82.1-36.8 82.1-82.1 82.1zm104.5-146.4c-9.9 0-17.9-8-17.9-17.9s8-17.9 17.9-17.9 17.9 8 17.9 17.9-8 17.9-17.9 17.9z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-[#F5FCE1] text-sm mt-6 border-t border-gray-700 pt-4">
          © {new Date().getFullYear()} AgilityAI . All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
