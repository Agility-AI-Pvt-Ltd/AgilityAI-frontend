import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "/new_logo.jpg";
import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom"; // Import useNavigate
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { user, token, logout } = useAuth();
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  // Handle logout
  const handleLogout = () => {
    logout(); // Call the logout function from your AuthContext
    navigate("/login"); // Redirect to the login page
  };

  return (
    <nav className="sticky top-0 z-50 py-3 px-3 backdrop-blur-lg bg-gray-700/30 border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight">AgilityAI</span>
          </NavLink>
          <ul className="hidden lg:flex ml-14 space-x-12 text-[#F5FCE1]">
            {/* ABOUT US DROPDOWN */}
            <li className="relative group">
              <span className="cursor-pointer">About Us</span>
              <ul className="absolute left-0 top-8 bg-gray-800 text-white rounded-md shadow-lg p-2 space-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform -translate-y-2 transition-all duration-300 min-w-[200px] z-20">
                <li>
                  <NavLink
                    to="/about/company"
                    className="block px-4 py-2 hover:bg-gray-700 rounded-md"
                  >
                    About Company
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about/founders"
                    className="block px-4 py-2 hover:bg-gray-700 rounded-md"
                  >
                    About Founders
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about/advisory-board"
                    className="block px-4 py-2 hover:bg-gray-700 rounded-md"
                  >
                    Advisory Board
                  </NavLink>
                </li>
              </ul>
            </li>

            {/* OTHER STATIC LINKS */}
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/careers">Careers</NavLink>
            </li>
            <li>
              <NavLink to="/newsfeed">AI Insights</NavLink>
            </li>
          </ul>

          <div className="hidden lg:flex justify-center space-x-12 items-center">
            {token ? ( // If user is authenticated, show Logout button
              <>
                <NavLink
                  to="/account" // Link to the account page
                  className="py-2 px-3 border rounded-md hover:bg-teal-500 hover:text-white transition duration-200"
                >
                  Account
                </NavLink>
                <button
                  onClick={handleLogout} // Use handleLogout
                  className="py-2 px-3 border rounded-md hover:bg-red-500 hover:text-white transition duration-200"
                >
                  Logout
                </button>
              </>
            ) : (
              // If user is not authenticated, show Sign In and Create Account buttons
              <>
                {/* <NavLink to="/login" className="py-2 px-3 border rounded-md">
                  Sign In
                </NavLink> */}
                {/* <NavLink
                                    to="/register"
                                    className="bg-gradient-to-r from-teal-400 to-blue-600 py-2 px-3 rounded-md"
                                >
                                    Create account
                                </NavLink> */}
              </>
            )}
          </div>

          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul className="space-y-4 text-[#F5FCE1]">
              {/* ABOUT US Dropdown-style links */}
              <li>
                <span className="font-semibold">About Us</span>
                <ul className="ml-4 mt-2 space-y-2 text-sm text-[#e0e8d4]">
                  <li>
                    <NavLink to="/about/company">About Company</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about/founders">About Founders</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about/advisory-board">Advisory Board</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>
              <li>
                <NavLink to="/careers">Careers</NavLink>
              </li>
              <li>
                <Link to="/newsfeed">AI Insights</Link>
              </li>
            </ul>

            {/* Auth Buttons */}
            <div className="flex mt-8 space-x-6">
              {token ? (
                <>
                  <NavLink
                    to="/account"
                    className="py-2 px-3 border rounded-md hover:bg-teal-500 hover:text-white transition duration-200"
                  >
                    Account
                  </NavLink>
                  <button
                    onClick={handleLogout}
                    className="py-2 px-3 border rounded-md hover:bg-red-500 hover:text-white transition duration-200"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  {/* <NavLink to="/login" className="py-2 px-3 border rounded-md">
                    Sign In
                  </NavLink> */}
                  {/* <NavLink
            to="/register"
            className="py-2 px-3 rounded-md bg-gradient-to-r from-teal-400 to-blue-600"
          >
            Create account
          </NavLink> */}
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
