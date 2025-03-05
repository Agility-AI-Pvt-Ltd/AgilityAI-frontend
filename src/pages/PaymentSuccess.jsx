import React from "react";
import { Link, useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PaymentSuccess = ({  }) => {
  const params = useParams();
  const {user} =useAuth();

  return (
    <div className="flex items-center justify-center h-screen text-white">
      {user && (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center w-96">
          <h2 className="text-2xl font-semibold text-[#70FCEF] mb-4">
            Payment Successful
          </h2>
          <p className="text-gray-300 mb-2">
            Your course subscription has been activated
          </p>
          <p className="text-gray-400 mb-4">Reference No - {params.id}</p>
          <Link
            to={`/${user._id}/dashboard`}
            className="bg-[#4ee4e4] hover:bg-[#1E88E5] text-[#F5FCE1] font-bold py-2 px-4 rounded transition duration-300"
          >
            Go to Dashboard
          </Link>
        </div>
      )}
    </div>
  );
};

export default PaymentSuccess;
