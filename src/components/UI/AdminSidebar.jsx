import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Menu, X } from "lucide-react"; 
import { LogOut } from "lucide-react"; 
import { Folder } from "lucide-react";

const AdminSidebar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className={`bg-gray-800 text-white h-screen p-5 transition-all ${isOpen ? "w-64" : "w-16"} duration-300`}>
        {/* Toggle Button */}
        <button className="text-white mb-6 hover:cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-4">
          <Link to="/admin/dashboard" className="hover:text-gray-300">
            {isOpen ? "Dashboard" : "🏠"}
          </Link>
          <Link to="/admin/users" className="hover:text-gray-300">
            {isOpen ? "Manage Admins" : "👥"}
          </Link>
          <Link to="/admin/course" className="hover:text-gray-300">
            {isOpen ? "Courses" : "📚"}
          </Link>
          <Link to="/admin/enquiries" className="hover:text-gray-300">
            {isOpen ? "Business Enquiries" : "📩"}
          </Link>
          <Link to="/admin/joblistings" className="hover:text-gray-300">
            {isOpen ? "Job Listings" : "💼"}
          </Link>
          <Link to="/admin/jobapplications" className="hover:text-gray-300">
            {isOpen ? "Job Applications" : "📄"}
          </Link>
          <Link to="/admin/webinarlisting" className="hover:text-gray-300">
            {isOpen ? "Webinars" : "🎥"}
          </Link>
          <Link to="/admin/recordings" className="hover:text-gray-300">
            {isOpen ? "Recordings" : "📹"}
          </Link>
          <Link to="/admin/projects" className="hover:text-gray-300">
            {isOpen ? "Projects" : <Folder className="w-6 h-6 text-cyan-400" />}
          </Link>
        </nav>

        {/* Logout Button */}
        {user && (
          isOpen ? (

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 px-4 py-2 mt-6 rounded-md w-full"
          >
            Logout
          </button>
          ) : <LogOut size={20} className="mt-4"/>
        )}
      </div>
    </div>
  );
};

export default AdminSidebar;
