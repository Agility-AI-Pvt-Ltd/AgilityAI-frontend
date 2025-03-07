import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { server } from '../../main';
import AdminLayout from '../../components/Layout/AdminLayout';

const AdminDashboard = () => {
    const { user, role } = useAuth();
    const navigate = useNavigate();

    if (user && role !== "admin") return navigate('/');

    const [stats, setStats] = useState({});

    const fetchStats = async () => {
        try {
            const { data } = await axios.get(`${server}/api/stats`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            setStats(data.stats);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchStats();
    }, []);

    return (
        <AdminLayout>
            <div className="flex flex-col items-center p-6 space-y-6">
                {/* Header */}
                <h1 className="text-3xl md:text-4xl font-extrabold text-white px-6 py-3 rounded-lg shadow-lg text-center">
                    Admin Panel
                </h1>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
                    {/* Card Component */}
                    {[
                        { label: "Total Courses", value: stats.totalCourses || 0 },
                        { label: "Total Lectures", value: stats.totalLecture || 0 },
                        { label: "Total Students", value: stats.totalUsers || 0 }
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className="bg-[#059082] text-white p-6 rounded-xl text-center shadow-md hover:bg-[#70FCEF] hover:text-black transition duration-300 w-full"
                        >
                            <p className="text-lg font-semibold">{stat.label}</p>
                            <p className="text-3xl font-bold">{stat.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </AdminLayout>
    );
};

export default AdminDashboard;
