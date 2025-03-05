import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";


const AdminNavbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <nav className="bg-gray-800 text-white p-4 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link to="/admin/dashboard" className="text-xl font-semibold">
                    Admin Panel
                </Link>

                {/* Links */}
                <div className="flex space-x-6">
                    <Link to="/admin/users" className="hover:text-gray-300">
                        Manage Admins
                    </Link>
                    <Link to="/admin/course" className="hover:text-gray-300">
                        Courses
                    </Link>
                    <Link to="/admin/enquiries" className="hover:text-gray-300">
                        Business Enquiries
                    </Link>
                    <Link to="/admin/joblistings" className="hover:text-gray-300">
                        Job Listings
                    </Link>
                    <Link to="/admin/jobapplications" className="hover:text-gray-300">
                        Job Applications
                    </Link>
                    
                </div>

                {/* Logout Button */}
                {user && (
                    <button
                        onClick={handleLogout}
                        className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md"
                    >
                        Logout
                    </button>
                )}
            </div>
        </nav>
    );
};

export default AdminNavbar;
