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
            <div className="flex flex-wrap justify-center items-center gap-6 p-6">
                <div className="bg-[#059082] text-white p-5 rounded-md text-center shadow-md hover:bg-[#70FCEF] transition duration-300 w-64">
                    <p className="text-lg font-semibold">Total Courses:</p>
                    <p className="text-2xl font-bold">{stats.totalCourses || 0}</p>
                </div>

                <div className="bg-[#059082] text-white p-5 rounded-md text-center shadow-md hover:bg-[#70FCEF] transition duration-300 w-64">
                    <p className="text-lg font-semibold">Total Lectures:</p>
                    <p className="text-2xl font-bold">{stats.totalLecture || 0}</p>
                </div>

                <div className="bg-[#059082] text-white p-5 rounded-md text-center shadow-md hover:bg-[#70FCEF] transition duration-300 w-64">
                    <p className="text-lg font-semibold">Total Students:</p>
                    <p className="text-2xl font-bold">{stats.totalUsers || 0}</p>
                </div>
            </div>
        </AdminLayout>
    );
};

export default AdminDashboard;
