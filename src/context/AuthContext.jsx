import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { server } from "../main";
import toast from "react-hot-toast";

const AuthContext = createContext(null);

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("token") || "");
    const [role, setRole] = useState(localStorage.getItem("role") || "");
    const [otpSent, setOtpSent] = useState(false);

    // Update axios headers whenever the token changes
    useEffect(() => {
        if (token) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        } else {
            delete axios.defaults.headers.common["Authorization"];
        }
    }, [token]);

    const login = async (email, password) => {
        try {
            const response = await axios.post(`${server}/api/auth/login`, { email, password });

            if (response.status === 200) {
                toast.success("Welcome");
                const { token, user } = response.data;
                setUser(user);
                setToken(token);
                setRole(user.role);

                localStorage.setItem("token", token);
                localStorage.setItem("role", user.role);
                return user;
            }
        } catch (error) {
            // toast.error("Login failed");
            // console.error("Login error:", error.response?.data?.message || error.message);
            throw new Error(error.response?.data?.message || "Login failed");
        }
    };

    const register = async (username, email, password, role) => {
        try {
            const { data } = await axios.post(`${server}/api/auth/register`, {
                username,
                email,
                password,
                role
            });
            setOtpSent(true);
            localStorage.setItem("token", data.token);
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Registration failed. Please try again!";
            throw new Error(errorMessage);
        }

        // try {
        //     const response = await axios.post(`${server}/api/auth/register`, { username, email, password, role });

        //     if (response.status === 201) {
        //         const { token, user } = response.data;
        //         setUser(user);
        //         setToken(token);
        //         setRole(user.role);

        //         localStorage.setItem("token", token);
        //         localStorage.setItem("role", user.role);
        //     }

        //     return response.data;
        // } catch (error) {
        //     console.error("Registration error:", error.response?.data?.message || error.message);
        //     throw new Error(error.response?.data?.message || "Registration failed");
        // }
    };


    const verifyOtp = async (otp, navigate) => {
        const token = localStorage.getItem("token");
        try {
            const response = await axios.post(`${server}/api/auth/verify`, { otp, token });
    
            if (response.data && response.data.success) {
                toast.success(response.data.message);
                localStorage.clear();
                navigate("/login");
            } else {
                toast.error(response.data.message || "Invalid OTP");
            }
        } catch (error) {
            // console.error("OTP Verification error:", error.response?.data?.message || error.message);
            toast.error(error.response?.data?.message || "OTP verification failed");
        }
    };
    
    

    const logout = () => {
        setUser(null);
        setToken("");
        setRole("");

        localStorage.removeItem("token");
        localStorage.removeItem("role");

        delete axios.defaults.headers.common["Authorization"];
    };

    const fetchUser = async () => {
        try {
            const { data } = await axios.get(`${server}/api/auth/me`, {
                headers: {
                    token: localStorage.getItem("token"),
                },
            }); 
            setUser(data.user);
        } catch (error) {
            console.error("fetching error:", error.response?.data?.message || error.message);
            throw new Error(error.response?.data?.message || "fetching failed");
        }
    }
    useEffect(() => {
        if(user) fetchUser();
    }, []);

    return (
        <AuthContext.Provider value={{otpSent ,verifyOtp , user, token, role, login, register, logout, fetchUser }}>
            {children}
        </AuthContext.Provider>
    );
};