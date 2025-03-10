import React from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { server } from '../main';
import toast from 'react-hot-toast';

const ResetPassword = () => {
    const [password, setPassword] = useState("");
    const [btnLoading, setBtnLoading] = useState(false);
    const navigate = useNavigate();
    const params = useParams();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setBtnLoading(true);
        try {
            const { data } = await axios.post(
              `${server}/api/auth/reset?token=${params.token}`,
              {
                password,
              }
            );
      
            toast.success(data.message);
            navigate("/login");
            setBtnLoading(false);
          } 
        catch(error) {
        toast.error(error.response.data.message);
        setBtnLoading(false);
      }
    }

    return (

        <div className="flex justify-center items-center min-h-screen">
            <div className="p-8 rounded-lg shadow-lg w-96 bg-white text-black">
                <h2 className="text-2xl font-semibold mb-4 text-center">Reset Password</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <label className="block text-sm font-medium text-gray-700">Enter Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#8dfff7] focus:outline-none"
                    />
                    <button
                        type="submit"
                        disabled={btnLoading}
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition disabled:bg-gray-400"
                    >
                        {btnLoading ? "Please Wait..." : "Reset Password" }
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ResetPassword
