import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/UI/Spinner";

const Account = () => {
    const { user, token, role, fetchUser } = useAuth();
    const navigate = useNavigate();


    useEffect(() => {
        if (!token) {
            navigate("/login"); // Redirect to login if not authenticated
        } else {
            fetchUser(); // Fetch user details if authenticated
        }
    }, [token]);

    if (!user) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <Spinner/>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center ">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md ">
                <h1 className="text-2xl font-bold mb-6 text-center text-white">My Profile</h1>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-[#F5FCE1]">Username</label>
                        <p className="mt-1 p-2 bg-gray-50 dark:bg-gray-700 rounded-md text-gray-300">
                            {user.username}
                        </p>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-[#F5FCE1]">Email</label>
                        <p className="mt-1 p-2 bg-gray-50 dark:bg-gray-700 rounded-md text-gray-300">
                            {user.email}
                        </p>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-[#F5FCE1]">Account</label>
                        <p className="mt-1 p-2 bg-gray-50 dark:bg-gray-700 rounded-md text-gray-300">
                            {role}
                        </p>
                    </div>
                    <div>
                        <button
                            onClick={() => navigate(`/${user._id}/dashboard`)}
                            className="bg-gradient-to-r from-[#4EE4E4] to-[#1E88E5] hover:from-[#5AE0D8] hover:to-[#1BAA9F] text-[#FFFFFF] font-semibold py-2 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
                        >
                            Dashboard
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account
