import React, { useState ,useEffect} from "react";
import { Link, useNavigate } from "react-router-dom"; // For navigation
import { useAuth } from "../context/AuthContext"; // For managing authentication state
import { CourseData } from "../context/CourseContext";
import toast from "react-hot-toast";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [btnLoading, setBtnLoading] = useState(false);
    const { login, user, role } = useAuth();
    const navigate = useNavigate(); // For navigation

    const {fetchMyCourse} = CourseData();


    useEffect(() => {
        if (user && role) {
            if (role === "admin") navigate("/admin/dashboard");
            else if (role === "business") navigate("/contact");
            else if (role === "student") navigate("/account");
            else navigate("/");

            fetchMyCourse();
        }
    }, [user, role]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setBtnLoading(true);

        try {
            // Call the login function from AuthContext
            const user = await login(email, password);
        } catch (error) {
            toast.error("Login failed. Please check your credentials and try again.");
        }finally {
            setBtnLoading(false); // Stop loading after login attempt
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center ">
            <div className="bg-white text-black p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200 flex justify-center items-center"
                        disabled={btnLoading} 
                    >
                        {btnLoading ? (
                            <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white mr-2"></div>
                        ) : null}
                        {btnLoading ? "Logging in..." : "Login"}
                    </button>
                </form>
                <p className="mt-4 text-center">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-blue-500 hover:underline">
                        Register here
                    </Link>
                </p>
                <p className="mt-1 text-center">
                    <Link to="/forgot" className="text-blue-500 hover:underline">Forgot password?</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;