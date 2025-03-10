import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from '../main';
import toast from 'react-hot-toast';




const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [btnLoading,setBtnLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBtnLoading(true);
    try {
      const { data } = await axios.post(`${server}/api/auth/forgot`, { email });
      toast.success(data.message);
      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setBtnLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="p-8 rounded-lg shadow-lg w-96 bg-white text-black">
        <h2 className="text-2xl font-semibold mb-4 text-center">Forgot Password</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">Enter Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#8dfff7] focus:outline-none"
          />
          <button
            type="submit"
            disabled={btnLoading}
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition disabled:bg-gray-400"
          >
            {btnLoading ? "Please Wait..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
